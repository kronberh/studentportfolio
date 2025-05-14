import "./AboutMe.css";
import { useState } from "react";
import { AiOutlinePython } from "react-icons/ai";
import { FaJava, FaUnity } from "react-icons/fa";
import { PiFileCpp, PiFileCSharp, PiFileJs, PiFileTs } from "react-icons/pi";
import { DiIntellij, DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { SiConstruct3 } from "react-icons/si";

type Params = {
    colorH: number
}

function AboutMe(params: Params) {
    const [hoverU1, setHoverU1] = useState<boolean>(false);
    const [hoverP1, setHoverP1] = useState<boolean>(false);
    const [hoverU2, setHoverU2] = useState<boolean>(false);
    const [hoverP2, setHoverP2] = useState<boolean>(false);
    const [hoverP3, setHoverP3] = useState<boolean>(false);

    const styleU1: React.CSSProperties = {
        color: hoverU1 ? "inherit" : `hsl(${params.colorH}, 50%, 50%)`,
    };
    const styleP1: React.CSSProperties = {
        color: hoverP1 ? "inherit" : `hsl(${params.colorH}, 50%, 50%)`,
    };
    const styleU2: React.CSSProperties = {
        color: hoverU2 ? "inherit" : `hsl(${params.colorH}, 50%, 50%)`,
    };
    const styleP2: React.CSSProperties = {
        color: hoverP2 ? "inherit" : `hsl(${params.colorH}, 50%, 50%)`,
    };
    const styleP3: React.CSSProperties = {
        color: hoverP3 ? "inherit" : `hsl(${params.colorH}, 50%, 50%)`,
    };

    return (
        <div id="about-me" className="container p-4">
            <h2 className="text-center">About me</h2>
            <p>
                I am Yelyzaveta (or shortly Liza) Kronberh, a ukrainian student of&nbsp;
                <a
                    href="https://op.edu.ua/en"
                    target="_blank"
                    style={styleU1}
                    onMouseOver={() => setHoverU1(true)}
                    onMouseOut={() => setHoverU1(false)}
                >
                    Odessа Polytechnic National University
                </a>
                's&nbsp;
                <a
                    href="https://op.edu.ua/en/1221"
                    target="_blank"
                    style={styleP1}
                    onMouseOver={() => setHoverP1(true)}
                    onMouseOut={() => setHoverP1(false)}
                >
                    Computer sciences
                </a>
                &nbsp;
                programme and&nbsp;
                <a
                    href="https://itstep.org/about-academy"
                    target="_blank"
                    style={styleU2}
                    onMouseOver={() => setHoverU2(true)}
                    onMouseOut={() => setHoverU2(false)}
                >
                    IT Step Academy
                </a>
                's&nbsp;
                <a
                    href="https://od.itstep.org/software-development"
                    target="_blank"
                    style={styleP2}
                    onMouseOver={() => setHoverP2(true)}
                    onMouseOut={() => setHoverP2(false)}
                >
                    Software Development
                </a>
                &nbsp;
                programme.
            </p>
            <p>
                Since school years, Math and Informatics have been my favourite subjects.
                I've always been showing big interest in both automated and manual calculation.
                Having tested myself in mathematical and informatical school olympiads,
                and having passed a&nbsp;
                <a
                    href="https://od.itstep.org/small-computer-academy"
                    target="_blank"
                    style={styleP3}
                    onMouseOver={() => setHoverP3(true)}
                    onMouseOut={() => setHoverP3(false)}
                >
                    Small Computer Academy
                </a>
                &nbsp;
                course by the end of my teenhood, it has become clear to me that development is indeed my calling.
            </p>
            <p>
                Within my teenhood I have learned various programming languages like&nbsp;
                <AiOutlinePython />Python, <FaJava />Java, <PiFileCpp />C/C++, <PiFileCSharp />C#, <PiFileJs />Javascript and <PiFileTs />Typescript,
                and have familiarized with some coding software like&nbsp;
                <DiIntellij />Intellij, <DiVisualstudio />Visual Studio and <VscVscode />VSCode,
                as well as a small portion of gamedev software like&nbsp;
                <SiConstruct3 />Construct and a little bit of <FaUnity />Unity.
            </p>
            <p>
                My goal is to expand the lists above and to enhance current skills, both soft and hard ones.
                I believe that continuous studying, regardless of age or current skill level,
                with a little passion and determination is a key to achieving one's life goals.
            </p>
            <p>
                The development field is growing constantly, and I am ready to grow along.
            </p>
        </div>
    )
}

export { AboutMe }
