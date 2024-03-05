/* eslint-disable prettier/prettier */
import "./background.css";

export function Background() {
    return (
        
        <picture>
            <source media="(max-width: 768px)" srcSet="/bgsmall.png" />
            <img
                className="absolute left-0 top-0 -z-10 min-h-screen w-full object-cover"
                src="/bg.png"
                alt="Background"
                width={1400}
                height={787}
            />
        </picture>

    );
}
