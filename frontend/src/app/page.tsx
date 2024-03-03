import { Background } from "./components/background";
import { Header } from "./components/header";
import { PlayerProfile } from "./components/playerprofile";
import { Assertive } from "./components/assertive";

export default function Home() {
    return (
        <main>
            <Background/>
            <Assertive/>
            
            <Header/>
            <PlayerProfile/>
            
        </main>
    );
}
