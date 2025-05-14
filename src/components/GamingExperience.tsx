import "./GamingExperience.css";
import { useState } from "react";
import { gamingCards } from "../data/gamingCards";

type Params = {
    colorH: number
}

function GamingExperience(params: Params) {
    return (
        <div id="gaming-experience" className="container p-4">
            <h2 className="text-center">Gaming Experience</h2>
            <p>
                Now what a game developer would I be without having tried some projects to be inspired by?
                It is not a secret that my interest in game development originates from gaming itself.
                While I am not a professional cypersportsman, I want to prove myself capable of reviewing work from a player's perspective.
                Below are the game ganres I admire the most.
            </p>
            <div id="gamingExperienceCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {gamingCards.map((_, i) => {
                        return (
                            <button key={i} type="button" data-bs-target="#gamingExperienceCarousel" data-bs-slide-to={i.toString()} className={(i === 0) ? "active" : undefined} aria-current={(i === 0) ? "true" : "false"}></button>
                        )
                    })}
                </div>
                <div className="carousel-inner">
                    {gamingCards.map((card, i) => {
                        return (
                            <div className={`carousel-item ${(i === 0) ? "active" : ""}`} key={i}>
                                <video className="d-block w-100 rounded" autoPlay muted loop>
                                    <source src={card.videoPath} type="video/mp4" />
                                </video>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                    <div className="d-flex flex-wrap justify-content-center gap-1">
                                        {card.links.map((link, i) => {
                                            const [hover, setHover] = useState<boolean>(false)

                                            const style: React.CSSProperties = {
                                                color: hover ? `hsl(${params.colorH}, 50%, 50%)` : "inherit",
                                                backgroundColor: hover ? undefined : `hsl(${params.colorH}, 50%, 50%)`
                                            };

                                            return (
                                                <a
                                                    key={i}
                                                    className="card-text h4"
                                                    href={link.href}
                                                    target="_blank"
                                                    style={style}
                                                    onMouseOver={() => setHover(true)}
                                                    onMouseOut={() => setHover(false)}
                                                >
                                                    {link.icon}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#gamingExperienceCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#gamingExperienceCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export { GamingExperience }
