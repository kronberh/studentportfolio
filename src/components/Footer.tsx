import "./Footer.css";
import { useState } from "react";
import { socialLinks } from "../data/socialLinks";

type Params = {
    colorH: number
}

function Footer(params: Params) {
    return (
        <div id="footer" className="container p-4 bg-dark">
            <h2 className="text-center text-light">Social Links</h2>
            <div className="d-flex flex-column gap-2">
                {socialLinks.map((link, i) => {
                    const [hover, setHover] = useState<boolean>(false)
                    const [linkHover, setLinkHover] = useState<boolean>(false)

                    const style: React.CSSProperties = {
                        color: hover ? `hsl(${params.colorH}, 50%, 50%)` : "inherit",
                        backgroundColor: hover ? undefined : `hsl(${params.colorH}, 50%, 50%)`
                    };

                    const linkStyle: React.CSSProperties = {
                        color: linkHover ? "inherit" : `hsl(${params.colorH}, 50%, 50%)`,
                    };

                    return (
                        <div className="d-flex align-items-center gap-2" key={i}>
                            <a
                                className="card-text h4"
                                href={link.href}
                                target="_blank"
                                style={style}
                                onMouseOver={() => setHover(true)}
                                onMouseOut={() => setHover(false)}
                            >
                                {link.icon}
                            </a>
                            <a
                                href={link.href}
                                style={linkStyle}
                                onMouseOver={() => setLinkHover(true)}
                                onMouseOut={() => setLinkHover(false)}
                            >
                                {link.href}
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export { Footer }
