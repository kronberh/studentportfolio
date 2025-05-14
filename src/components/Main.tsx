import "./Main.css";
import { Header } from "./Header";
import { AboutMe } from "./AboutMe";
import { CodingExperience } from "./CodingExperience";
import { GamingExperience } from "./GamingExperience";
import { Minigames } from "./Minigames";
import { Footer } from "./Footer";

type Params = {
    colorH: number
}

function Main(params: Params) {
    return (
        <div className="bg-dark text-light" data-bs-target="#side-navbar" data-bs-spy="scroll">
            <Header colorH={params.colorH} />
            <AboutMe colorH={params.colorH} />
            <CodingExperience colorH={params.colorH} />
            <GamingExperience colorH={params.colorH} />
            <Minigames colorH={params.colorH} />
            <Footer colorH={params.colorH} />
        </div>
    )
}

export { Main }
