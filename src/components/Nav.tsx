import './Nav.css';
import { useState } from 'react';
import { socialLinks } from '../data/socialLinks';

type Params = {
    colorH: number
}

function Nav(params: Params) {
    return (
        <nav id="side-navbar" className="container p-4 h-100 bg-dark text-light text-center">
            <img
                src="/photo.webp"
                className="w-50 rounded-circle"
                alt="photo"
            />
            <h4 className="mt-3 mb-4">Yelyzaveta Kronberh</h4>
            <div className="d-flex justify-content-evenly mb-5 h4">
                {socialLinks.map((link, i) => {
                    const [hover, setHover] = useState<boolean>(false)

                    const style: React.CSSProperties = {
                        color: hover ? `hsl(${params.colorH}, 50%, 50%)` : "inherit",
                        backgroundColor: hover ? undefined : `hsl(${params.colorH}, 50%, 50%)`
                    };

                    return (
                        <a
                            key={i}
                            className="social-icon"
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
            <nav className="nav flex-column">
                <a className="nav-link text-light" href="#about-me">About me</a>
                <a className="nav-link text-light" href="#coding-experience">Coding experience</a>
                <a className="nav-link text-light" href="#gaming-experience">Gaming experience</a>
                <a className="nav-link text-light" href="#minigames">Minigames</a>
                <a className="nav-link text-light" href="#footer">Social Links</a>
            </nav>
        </nav>
    )
}

export { Nav }
