import { Player } from "./pages/player/player";
import { Players } from "./pages/player/players";
import { Assertive } from "./components/assertive/assertive";


export default function Home() {
    return (
        <main>

            <Assertive/>
            <Players/>

        </main>
    );
}
