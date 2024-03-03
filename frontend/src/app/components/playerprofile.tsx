import "../styles/playerprofile.css";


export function PlayerProfile() {
  return (

    <div className="mt-[60px] sd:mt-[60px]">

      <div className="relative z-0 w-full overflow-x-hidden">

        <div className="flex justify-center">
          <div className="flex-grow-1 w-full max-w-8xl overflow-x-auto sm:mx-4 md:mx-[30px] lg:mx-11 scrollbar-thin scrollbar-track-canvas-95 scrollbar-thumb-canvas-80 scrollbar-thumb-rounded-full">
            <div className="relative z-10 overflow-hidden pb-4">
              <div className="absolute -z-10 block size-full max-w-none bg-contain bg-center bg-no-repeat opacity-30 md:hidden" style={{ backgroundImage: "url('https://assets.blast.tv/images/teams/f239109c-ffef-4e83-830e-5ca340ee432b')" }}></div>
              <div className="flex h-56 w-full items-center gap-5 pt-16 md:h-80">
                <div className="flex place-content-center items-center lg:w-[21.5rem]">
                  <div className="relative flex size-32 shrink-0 overflow-hidden rounded-full md:size-48">
                    <img className="absolute h-52 max-w-none md:h-72" src="https://assets.blast.tv/images/players/db7f1e2c-ccfe-47d5-b005-1bc69519c129" alt="" />
                  </div>
                </div>
                <div className="flex h-full flex-col place-content-center items-start gap-2 md:w-96 md:gap-6">
                  <h1 className="font-style-desktop-h2 md:font-style-desktop-h1 text-neutral-10">fallen</h1>
                  <div className="flex items-center gap-2">
                    <img src="/br.svg" alt="BR" style={{ width: '25px', height: '18.75px' }} />
                    <span className="font-style-subheading-4 md:font-style-subheading-2 text-neutral-10">Gabriel Toledo</span>
                  </div>
                  <div className="hidden w-full items-center justify-between text-neutral-10 font-style-b2-body-copy md:flex">
                    <div className="flex gap-2 text-neutral-20">Age: <span className="font-bold text-neutral-10">32 Years old</span></div>
                    <div className="flex gap-2 text-neutral-20">Team: <span className="font-bold capitalize text-neutral-10"><a className="text-yellow no-underline">Furia</a></span></div>
                    <div className="flex gap-2 text-neutral-20">Status: <span className="font-bold capitalize text-neutral-10">Starter</span></div>
                  </div>
                </div>
                <div className="hidden h-[27.5rem] opacity-30 md:block">
                  <img className="absolute -top-16 right-0 size-[34.5rem] select-none" src="https://assets.blast.tv/images/teams/f239109c-ffef-4e83-830e-5ca340ee432b" />
                </div>
              </div>
              <div className="flex w-full items-center justify-between text-neutral-20 font-style-b3-body-copy md:hidden">
                <div className="flex gap-1 text-neutral-20">Age: <span className="text-neutral-20">32 Years old</span></div>
                <div className="flex gap-1 text-neutral-20">Team: <span className="capitalize text-neutral-20 text-yellow no-underline">Furia</span></div>
                <div className="flex gap-1 text-neutral-20">Status: <span className="font-bold capitalize">Starter</span></div>
              </div>
            </div>
          </div>
        </div>



      </div>

    </div>

  );
}


