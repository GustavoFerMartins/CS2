import { Background } from "./components/background/background";
import { Header } from "./components/header/header";
import { PlayerProfile } from "./pages/player/playerprofile";
import { Assertive } from "./components/assertive/assertive";
import { Overview } from "./pages/player/overview";

export default function Home() {
    return (
        <main>
            <Background/>
            <Assertive/>
            <Header/>
            <PlayerProfile/>  
            <Overview/>         
        </main>
    );
}
