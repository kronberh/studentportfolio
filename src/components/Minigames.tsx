import "./Minigames.css";
import { useState } from "react";
import { getMinigames } from "../data/minigames";

type Params = {
    colorH: number
}

function Minigames(params: Params) {
    const minigames = getMinigames(params.colorH);
    const [active, setActive] = useState<string>(Object.keys(minigames)[0]);

    return (
        <div id="minigames" className="container p-4">
            <h2 className="text-center">Minigames</h2>
            <p>
                As said earlier, my current main specialization is software development,
                and I have little to no experience in working with gamedev software.
                However, I am fully determined to gain some.
                Meanwhive, I have practiced making smaller games using tools I'm familiar with.
                Below are examples ready to be played right away.
            </p>
            <ul className="nav nav-tabs">
                {Object.keys(minigames).map(function(key, i) {
                    const [hover, setHover] = useState<boolean>(false)

                    const style: React.CSSProperties = {
                        backgroundColor: hover ? "var(--bs-dark)" : `hsl(${params.colorH}, 50%, 50%)`
                    };

                    return (
                        <li className="nav-item" key={i}>
                            <span
                                className={`nav-link ${key == active ? "active" : ""}`}
                                onClick={() => setActive(key)}
                                style={style}
                                onMouseOver={() => setHover(true)}
                                onMouseOut={() => setHover(false)}
                            >
                                {key}
                            </span>
                        </li>
                    )
                })}
            </ul>
            <div id="minigames-container">
                {minigames[active]}
            </div>
        </div>
    )
}

export { Minigames }
