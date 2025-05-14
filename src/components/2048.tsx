import "./2048.css";
import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Params = {
    colorH: number
}

function Game_2048(params: Params) {
    const gridSize: number = 4;
    const initialCellValue: number = 2;

    const [score, setScore] = useState<number>(0);
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [gameState, setGameState] = useState<number[][]>(Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => 0)));

    useEffect(() => {
        let interval: any = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        } else if (!isRunning && interval !== null) {
            clearInterval(interval);
        }
        return () => {
            if (interval !== null) clearInterval(interval);
        };
    }, [isRunning]);

    function slideRowsDown(grid: number[][]) {
        const rows: number = grid.length;
        const cols: number = grid[0].length;
        for (let k = 1; k < rows; k++) {
            for (let i = rows - k - 1; i < rows - 1; i++) {
                for (let j = 0; j < cols; j++) {
                    if (grid[i][j] !== 0) {
                        if (grid[i + 1][j] === 0) {
                            grid[i + 1][j] = grid[i][j];
                            grid[i][j] = 0;
                        } else if (grid[i][j] == grid[i + 1][j]) {
                            grid[i + 1][j] += grid[i][j];
                            setScore((prev) => prev + grid[i + 1][j]);
                            grid[i][j] = 0;
                        }
                    }
                }
            }
        }
    }

    const addNew = (grid: number[][]) => {
        if (!grid.some(row => row.includes(0))) return;
        while (true) {
            const row = Math.floor(Math.random() * gridSize);
            const col = Math.floor(Math.random() * gridSize);
            if (grid[row][col] === 0) {
                grid[row][col] = initialCellValue;
                break;
            }
        }
    };

    const transposed = (matrix: number[][]) => {
        return matrix.map((_, i) => matrix.map(row => row[i]));
    };

    const flip = (matrix: number[][]) => {
        return [...matrix].reverse();
    };

    const handleUp = () => {
        if (!isRunning) return;
        let newState: number[][] = gameState.map(row => [...row]);
        newState = flip(newState);
        slideRowsDown(newState);
        newState = flip(newState);
        setGameState(newState);
        addNew(newState);
        setGameState(newState);
    };

    const handleDown = () => {
        if (!isRunning) return;
        let newState: number[][] = gameState.map(row => [...row]);
        slideRowsDown(newState);
        setGameState(newState);
        addNew(newState);
        setGameState(newState);
    };

    const handleLeft = () => {
        if (!isRunning) return;
        let newState: number[][] = gameState.map(row => [...row]);
        newState = transposed(newState);
        newState = flip(newState);
        slideRowsDown(newState);
        newState = flip(newState);
        newState = transposed(newState);
        setGameState(newState);
        addNew(newState);
        setGameState(newState);
    };

    const handleRight = () => {
        if (!isRunning) return;
        let newState: number[][] = gameState.map(row => [...row]);
        newState = transposed(newState);
        slideRowsDown(newState);
        newState = transposed(newState);
        addNew(newState);
        setGameState(newState);
    };

    const resetState = () => {
        const newState: number[][] = Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => 0));
        addNew(newState);
        setGameState(newState);
    };

    const handleStart = () => {
        resetState();
        setScore(0);
        setTime(0);
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    return (
        <div id="game2048" className="w-100 h-100 d-flex row p-3">
            <div className="col-2">
                <p>Score: {score}</p>
            </div>
            <div className="col-8 d-flex flex-column justify-content-center align-items-center">
                <h5>Use arrow controls below</h5>
                <table className="table table-dark">
                    {Array.from({ length: gridSize }, (_, key) => key).map(function (i, key) {
                        return (
                            <tr key={key}>
                                {Array.from({ length: gridSize }, (_, key) => key).map(function (j, key2) {
                                    return (
                                        <td className="gamecell"
                                            key={key2}
                                            style={
                                                {backgroundColor: gameState[i][j] > 0 ? `hsl(${params.colorH}, ${(Math.log2(gameState[i][j]) * 5) % 101}%, 50%)` : 'var(--bs-dark   )'} 
                                            }
                                        >
                                            {gameState[i][j] > 0 ? gameState[i][j] : ""}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </table>
                <table className="table table-dark">
                    <tbody>
                        <tr>
                            <td className="rounded"></td>
                            <td className="rounded">{isRunning && <button className="btn btn-dark" onClick={handleUp}><FaArrowUp /></button>}</td>
                            <td className="rounded"></td>
                        </tr>
                        <tr>
                            <td className="rounded">{isRunning && <button className="btn btn-dark" onClick={handleLeft}><FaArrowLeft /></button>}</td>
                            <td className="rounded"></td>
                            <td className="rounded">{isRunning && <button className="btn btn-dark" onClick={handleRight}><FaArrowRight /></button>}</td>
                        </tr>
                        <tr>
                            <td className="rounded"></td>
                            <td className="rounded">{isRunning && <button className="btn btn-dark" onClick={handleDown}><FaArrowDown /></button>}</td>
                            <td className="rounded"></td>
                        </tr>
                    </tbody>
                </table>
                {!isRunning && (
                    <button onClick={handleStart} className="btn btn-success m-1">Start</button>
                )}
                {isRunning && (
                    <button onClick={handleStop} className="btn btn-danger m-1">Stop</button>
                )}
            </div>
            <div className="col-2 d-flex justify-content-end">
                <p>Time: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
            </div>
        </div>
    )
}

export { Game_2048 }
