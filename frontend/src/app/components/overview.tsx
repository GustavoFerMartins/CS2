import "../styles/overview.css"

export function Overview() {
    return (
        <div className="">

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
                                        <p>110</p>
                                    </div>
                                </div>
                                <div className="custom-div bg-canvas-95">
                                    <div className="title-container">
                                        <h1 className="font-tam1 text-neutral-10">Deaths</h1>
                                    </div>
                                    <div className="value-container font-tam2 text-neutral-10">
                                        <p>99</p>
                                    </div>
                                </div>
                                <div className="custom-div bg-canvas-95">
                                    <div className="title-container">
                                        <h1 className="font-tam1 text-neutral-10">ADR</h1>
                                    </div>
                                    <div className="value-container font-tam2 text-neutral-10">
                                        <p>67</p>
                                    </div>
                                </div>
                                <div className="custom-div bg-canvas-95">
                                    <div className="title-container">
                                        <h1 className="font-tam1 text-neutral-10">Headshot %</h1>
                                    </div>
                                    <div className="value-container font-tam2 text-neutral-10">
                                        <p>28</p>
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
