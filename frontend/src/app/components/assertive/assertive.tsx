import "./assertive.css";

export function Assertive() {
    return (
        <div>
            <div aria-live="assertive" className="pointer-events-none fixed inset-0 z-toast flex items-end p-2 sm:items-start sm:px-6 sm:py-16">
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                </div>
            </div>
            <nav className="fixed top-0 z-navbar w-screen select-none h-[60px] !bg-canvas-100">
            <div className="header-menu">
                <div className="flex h-full grow gap-6">
                    <div>
                        <div className="logo">
                        </div>
                    </div>
                    
                    <a href="https://github.com/GustavoFerMartins" target="_blank" rel="noopener noreferrer">
                        <button className="menulink" type="button">
                            <span className="namepage">news</span>
                        </button>
                    </a>

                    <a href="https://github.com/GustavoFerMartins" target="_blank" rel="noopener noreferrer">
                        <button className="menulink" type="button">
                            <span className="namepage">results</span>
                        </button>
                    </a>
                    <a href="https://github.com/GustavoFerMartins" target="_blank" rel="noopener noreferrer">
                        <button className="menulink" type="button">
                            <span className="namepage">players</span>
                        </button>
                    </a>
                    
                    <a href="https://github.com/GustavoFerMartins" target="_blank" rel="noopener noreferrer">
                        <button className="menulink" type="button">
                            <span className="namepage">teams</span>
                        </button>
                    </a>

                    <a href="https://github.com/GustavoFerMartins" target="_blank" rel="noopener noreferrer">
                        <button className="menulink" type="button">
                            <span className="namepage">matches</span>
                        </button>
                    </a>

                    <a href="https://github.com/GustavoFerMartins" target="_blank" rel="noopener noreferrer">
                        <button className="menulink" type="button">
                            <span className="namepage">rankings</span>
                        </button>
                    </a>
                    
                    
                    
                    
                </div>


                <div className="flex h-full">
                    
                    <a href="https://github.com/GustavoFerMartins" target="_blank" rel="noopener noreferrer" className="gittext">
                        <button className="flex px-7 ;" type="button">
                            <span className="gittext">
                                <span className="namepage">GitHub</span>
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </nav>

            <div className="background-wrapper">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/bgsmall.png" className="background-image" />
                    <img
                        className="background-image"
                        src="/bg.png"
                        alt="Background"
                        width={1400}
                        height={787}
                    />
                </picture>
            </div>

        </div>

    );
}