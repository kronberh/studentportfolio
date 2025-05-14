import "./CodingExperience.css";
import { useState } from "react";
import { SiRender, SiVercel } from "react-icons/si";
import { codingCards } from "../data/codingCards";

type Params = {
    colorH: number
}

function CodingExperience(params: Params) {
    const cardStyle: React.CSSProperties = {
        border: `0.1em solid hsl(${params.colorH}, 50%, 50%)`
    };

    return (
        <div id="coding-experience" className="container p-4">
            <h2 className="text-center">Coding Experience</h2>
            <p>
                Here goes a list of my course works and pet projects.
                Source code of each is publiched to GitHub;
                some of the projects are hosted via <SiRender />Render or <SiVercel />Vercel.
                More details and links are available by hovering a respective card.
            </p>
            <div className="d-flex flex-wrap justify-content-between gap-3">
                {codingCards.map((card, i) => {
                    const [hover, setHover] = useState<boolean>(false)

                    const style: React.CSSProperties = {
                        color: hover ? "inherit" : `hsl(${params.colorH}, 50%, 50%)`,
                        cursor: "pointer"
                    };

                    return (
                        <div className="card text-bg-dark" style={cardStyle} key={i}>
                            <img src={card.imagePaths[0]} className="img-gallery card-img" alt={card.title} />
                            <div className="card-img-overlay">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="text-truncate m-0">{card.description}</p>
                                <a
                                    className="card-read-more"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#codingModal${i}`}
                                    style={style}
                                    onMouseOver={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    Read more
                                </a>
                                <div className="d-flex flex-wrap gap-1 mt-2">
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
                                                onMouseLeave={() => setHover(false)}
                                            >
                                                {link.icon}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="modal fade" id={`codingModal${i}`}>
                                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content bg-dark text-light">
                                        <div className="modal-header border-0">
                                            <h3 className="modal-title text-center w-100">{card.title}</h3>
                                            <button data-bs-theme="dark" type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body row">
                                            <div className="col-6">
                                                <div id={`codingCarousel${i}`} className="carousel slide carousel-fade" data-bs-ride="true">
                                                    <div className="carousel-indicators">
                                                        {card.imagePaths.map((_, i) => {
                                                            return (
                                                                <button key={i} type="button" data-bs-target={`#codingCarousel${i}`} data-bs-slide-to={i.toString()} className={(i === 0) ? "active" : undefined} aria-current={(i === 0) ? "true" : "false"}></button>
                                                            )
                                                        })}
                                                    </div>
                                                    <div className="carousel-inner">
                                                        {card.imagePaths.map((img, i) => {
                                                            return (
                                                                <div className={`carousel-item ${(i === 0) ? "active" : ""}`} key={i}>
                                                                    <img src={img} className="d-block w-100 rounded" alt={card.title} />
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    <button className="carousel-control-prev" type="button" data-bs-target={`#codingCarousel${i}`} data-bs-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next" type="button" data-bs-target={`#codingCarousel${i}`} data-bs-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <p>{card.description}</p>
                                                <div className="d-flex flex-wrap gap-2 mt-2">
                                                    {card.links.map((link, i) => {
                                                        const [hover, setHover] = useState<boolean>(false)

                                                        const style: React.CSSProperties = {
                                                            color: hover ? `hsl(${params.colorH}, 50%, 50%)` : "inherit",
                                                            backgroundColor: hover ? undefined : `hsl(${params.colorH}, 50%, 50%)`
                                                        };

                                                        return (
                                                            <a
                                                                key={i}
                                                                className="card-text h3"
                                                                href={link.href}
                                                                target="_blank"
                                                                style={style}
                                                                onMouseOver={() => setHover(true)}
                                                                onMouseLeave={() => setHover(false)}
                                                            >
                                                                {link.icon}
                                                            </a>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer border-0">
                                            {/* todo socials */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export { CodingExperience }
