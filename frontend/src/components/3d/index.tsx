import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CanvasWrapper } from "./style";

function ThreeScene() {
    const mount = useRef<HTMLDivElement>(null);
    const scene = useRef<THREE.Scene>(new THREE.Scene()).current;
    const camera = useRef<THREE.PerspectiveCamera | null>(null);
    const renderer = useRef<THREE.WebGLRenderer | null>(null);
    const controls = useRef<OrbitControls | null>(null);

    useEffect(() => {
        if (!mount.current) return;

        renderer.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.current.setSize(750, 750);
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

        camera.current = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
        camera.current.position.z = 20;
        controls.current = new OrbitControls(camera.current, renderer.current.domElement);

        const animate = () => {
            if (!renderer.current || !camera.current) return;
            renderer.current.render(scene, camera.current);
            requestAnimationFrame(animate);
            controls.current?.update();
        };

        animate();

        return () => {
            scene.remove(...scene.children.filter((obj) => obj.type !== "AmbientLight"));
            renderer.current?.dispose();
        };
    }, []);

    return <CanvasWrapper ref={mount} />;
}

export default ThreeScene;
