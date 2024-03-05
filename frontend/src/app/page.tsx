import { Background } from "./components/background";
import { Header } from "./components/header";
import { PlayerProfile } from "./pages/player/playerprofile";
import { Assertive } from "./components/assertive";
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
