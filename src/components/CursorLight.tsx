import "./CursorLight.css";
import { useEffect, useState } from "react";

type Params = {
    colorH: number
}

function CursorLight(params: Params) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: any) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div className="cursor-light" style={{
            backgroundColor: `hsl(${params.colorH}, 100%, 50%)`,
            transform: `translate(${position.x - 200}px, ${position.y - 200}px)`
        }} />
    )
}

export { CursorLight }
