import "../styles/overview.css"

export function Overview() {
    return (
        <div>
            <div className="relative z-0 w-full overflow-x-hidden pb-24">
                <div className="flex justify-center">
                    <div className="main-container">
                        <div className="relative z-10 overflow-hidden pb-4">
                            <div className="flex h-56 w-full items-center gap-5 justify-center">
                                <div className="custom-div bg-canvas-95">
                                    <div className="title-container">
                                        <h1 className="font-tam1 text-neutral-10">Kills</h1>
                                    </div>
                                    <div className="value-container font-tam2 text-neutral-10">
                                        <p>362</p>
                                    </div>
                                </div>
                                <div className="custom-div bg-canvas-95">
                                    <div className="title-container">
                                        <h1 className="font-tam1 text-neutral-10">Deaths</h1>
                                    </div>
                                    <div className="value-container font-tam2 text-neutral-10">
                                        <p>334</p>
                                    </div>
                                </div>
                                <div className="custom-div bg-canvas-95">
                                    <div className="title-container">
                                        <h1 className="font-tam1 text-neutral-10">K/D Ratio</h1>
                                    </div>
                                    <div className="value-container font-tam2 text-neutral-10">
                                        <p>1.08</p>
                                    </div>
                                </div>
                                <div className="custom-div bg-canvas-95">
                                    <div className="title-container">
                                        <h1 className="font-tam1 text-neutral-10">ADR</h1>
                                    </div>
                                    <div className="value-container font-tam2 text-neutral-10">
                                        <p>65.81</p>
                                    </div>
                                </div>
                                <div className="custom-div bg-canvas-95">
                                    <div className="title-container">
                                        <h1 className="font-tam1 text-neutral-10">Headshot %</h1>
                                    </div>
                                    <div className="value-container font-tam2 text-neutral-10">
                                        <p>24%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-56 w-full items-center gap-5 justify-center">
                                <div className="custom-div bg-canvas-95">
                                    <div className="title-container">
                                        <h1 className="font-tam1 text-neutral-10">Maps</h1>
                                    </div>
                                    <div className="value-container font-tam2 text-neutral-10">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
