import { Players } from "./pages/player/players";
import { Player } from "./pages/player/player";
import { Assertive } from "./components/assertive/assertive";

export default function Home() {
    return (
        <main>
            <Assertive />
            <Player />
            <Players />
        </main>
    );
}
