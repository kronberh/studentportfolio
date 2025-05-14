import "./Header.css";
import { useState } from "react";
import { timeOfDay } from "../helpers/timeOfDay";

type Params = {
    colorH: number
}

function Header(params: Params) {
    const [hoverU, setHoverU] = useState<boolean>(false);
    const [hoverP, setHoverP] = useState<boolean>(false);

    const styleU: React.CSSProperties = {
        color: hoverU ? "inherit" : `hsl(${params.colorH}, 50%, 50%)`,
    };
    const styleP: React.CSSProperties = {
        color: hoverP ? "inherit" : `hsl(${params.colorH}, 50%, 50%)`,
    };

    return (
        <div id="header" className="container p-4">
            <h1 className="text-center">Portfolio</h1>
            <p>
                Good {timeOfDay}! You are visiting a website that is designed as a student portfolio for&nbsp;
                <a
                    href="https://www.nord.no/en"
                    target="_blank"
                    style={styleU}
                    onMouseOver={() => setHoverU(true)}
                    onMouseOut={() => setHoverU(false)}
                >
                    Nord University
                </a>
                's&nbsp;
                <a
                    href="https://www.nord.no/en/studies/games-and-entertainment-technology-bachelor"
                    target="_blank"
                    style={styleP}
                    onMouseOver={() => setHoverP(true)}
                    onMouseOut={() => setHoverP(false)}
                >
                    Games and Entertainment Technology
                </a>
                &nbsp;
                study programme to prove myself a creative person with a huge desire for studying and development.
                The page contains a short self-introduction, a list of open-source software (mainly) projects,
                with some of them being hosted and therefore life for trying out,
                a list of some but not all game genres I'm most passionate about,
                and a few in-built simple browser minigames.
                Thank you for showing interest in my work!
            </p>
        </div>
    )
}

export { Header }
