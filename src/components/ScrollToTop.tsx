import './ScrollToTop.css';
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

type Params = {
    colorH: number
}

function ScrollToTop(params: Params) {
    const [visible, setVisible] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(false);

    const style: React.CSSProperties = {
        color: hover ? `hsl(${params.colorH}, 50%, 50%)` : "var(--bs-light)",
        backgroundColor: hover ? undefined : `hsl(${params.colorH}, 50%, 50%)`
    };

    const handleScroll = () => {
        const position: number = window.pageYOffset;
        setVisible(position > 1);
    };

    function onClick() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`btn btn-scrolltotop ${visible ? "visible" : ""}`}
            style={style}
            onClick={onClick}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <IoIosArrowUp />
        </button>
    )
}

export { ScrollToTop }
