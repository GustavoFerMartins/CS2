/* eslint-disable prettier/prettier */
import "./styles/background.css";

export function Background() {
    return (
        <div>
            <picture>
                <img
                    className="absolute left-0 top-0 -z-10 min-h-screen w-full object-cover"
                    src={"/bg.png"}
                    alt="Background"
                    width={1400}
                    height={787}
                />
            </picture>
        </div>
    );
}