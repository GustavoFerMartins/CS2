import "../styles/header.css";

export function Header() {
    return (
        <nav className="fixed top-0 z-navbar w-screen select-none transition duration-300 ease-in-out h-[60px] !bg-canvas-100">
            <div className="header-menu">
                <div className="flex h-full grow gap-6">
                    <div>
                        <div className="logo">
                        </div>
                    </div>

                    <a href="https://github.com/GustavoFerMartins" target="_blank" rel="noopener noreferrer">
                        <button className="menulink" type="button">
                            <span className="namepage">home</span>
                        </button>
                        
                    </a>
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
                    
                    <a href="https://github.com/GustavoFerMartins" target="_blank" rel="noopener noreferrer">
                        <button className="flex menulink px-7" type="button">
                            <span className="text-inherit font-style-label-3">
                                <span className="namepage">GitHub</span>
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </nav>

    );
}