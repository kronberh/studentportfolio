import { Minesweeper } from "../components/Minesweeper";
import { Game_2048 } from "../components/2048";
import { FlipCard } from "../components/FlipCard";
import { Snake } from "../components/Snake";

function getMinigames(colorH: number) {
    const minigames: Record<string, React.ReactElement> = {
        "Minesweeper": <Minesweeper colorH={colorH} />,
        "2048": <Game_2048 colorH={colorH} />,
        "Flip Card": <FlipCard colorH={colorH} />,
        "Snake": <Snake colorH={colorH} />
    };
    return minigames;
}

export { getMinigames }
