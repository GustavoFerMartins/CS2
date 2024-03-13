import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CanvasWrapper } from "./styles";

function ThreeScene() {
    const mount = useRef<HTMLDivElement>(null);
    const scene = useRef<THREE.Scene>(new THREE.Scene()).current;
    const camera = useRef<THREE.PerspectiveCamera | null>(null);
    const renderer = useRef<THREE.WebGLRenderer | null>(null);
    const controls = useRef<OrbitControls | null>(null);

    useEffect(() => {
        if (!mount.current) return;

        const width = mount.current.clientWidth;
        const height = mount.current.clientHeight;

        renderer.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.current.setSize(width, height);
        renderer.current.setClearColor(0x000000, 0);

        mount.current.appendChild(renderer.current.domElement);

        const loader = new GLTFLoader();
        loader.load(
            "./3d/ak47/scene.gltf",
            (gltf) => {
                scene.add(gltf.scene);
            },
            undefined,
            (error) => {
                console.error(error);
            },
        );

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        camera.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.current.position.z = 18;
        controls.current = new OrbitControls(camera.current, renderer.current.domElement);

        const animate = () => {
            if (!renderer.current || !camera.current) return;
            renderer.current.render(scene, camera.current);
            requestAnimationFrame(animate);
            controls.current?.update();
        };

        animate();

        const handleResize = () => {
            const width = mount.current!.clientWidth;
            const height = mount.current!.clientHeight;
            renderer.current!.setSize(width, height);
            camera.current!.aspect = width / height;
            camera.current!.updateProjectionMatrix();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            scene.remove(...scene.children.filter((obj) => obj.type !== "AmbientLight"));
            renderer.current?.dispose();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <CanvasWrapper ref={mount} />;
}

export default ThreeScene;
