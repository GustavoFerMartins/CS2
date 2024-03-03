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
                </div>
                <a href="https://github.com/GustavoFerMartins" target="_blank" rel="noopener noreferrer">
                    <button className="m-0 flex touch-manipulation select-none flex-col place-items-center justify-center rounded-small border border-solid transition-all duration-100 ease-in-out h-10 border-transparent text-[#121212] bg-yellow active:bg-[#FFFFB2] hover:bg-[#FFFE8B] hover:cursor-pointer px-7 py-3 sc-dZoequ klbgiK" type="button">
                        <span className="text-inherit font-style-label-3">
                            <span className="sc-cPiKLX ecWEMa">GitHub</span>
                        </span>
                    </button>
                </a>
            </div>
        </nav>

    );
}