import "./styles/players.css";


export function Players() {
    return (

        <div className="mt-[75px] sd:mt-[75px]">
            <div className="flex justify-center">
                <div className="flex-grow-1 w-full max-w-8xl overflow-x-auto sm:mx-4 md:mx-[30px] lg:mx-11">


                
                    <div className="box">
                        <div className="flex items-center">
                            <div className="relative flex items-center">
                                <img src="https://img-cdn.hltv.org/playerbodyshot/sAqrpGeO7o3rl7yNYfTMdQ.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=109%2C0%2C494%2C494&w=200&s=5fc15518c37a63f075f05b3dd0bdc6a0" alt="Foto" className="player-photo" />
                                <img src="https://img-cdn.hltv.org/teamlogo/ywdn4tmAvXfllLeV2SkkvF.png?ixlib=java-2.1.0&w=200&s=4878ec4edb411cf0c348226b0798d14f" alt="Foto" className="team-foto" />
                            </div>
                            <div className="divis">
                                <h2 className="text">Donk</h2>
                                <div>
                                    <p className="text">Spirit</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="divis">
                                <div className="text">RATING</div>
                                <div className="textvalue">1.46</div>
                            </div>
                            <div className="divis">
                                <div className="text">DPR</div>
                                <div className="textvalue">0.64</div>
                            </div>
                            <div className="divis">
                                <div className="text">KAST</div>
                                <div className="textvalue">78.1%</div>
                            </div>
                            <div className="divis">
                                <div className="text">IMPACT</div>
                                <div className="textvalue">1.69</div>
                            </div>
                            <div className="divis">
                                <div className="text">ADR</div>
                                <div className="textvalue">98.4</div>
                            </div>
                            <div className="divis">
                                <div className="text">KPR</div>
                                <div className="textvalue">0.97</div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    )
};