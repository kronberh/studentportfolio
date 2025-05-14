import "./Minesweeper.css";
import { useState, useEffect } from "react";
import { FaFlag, FaBomb } from "react-icons/fa";

type Params = {
    colorH: number
}

function Minesweeper(params: Params) {
    enum Cell {
        Bomb,
        Empty
    };

    enum State {
        Hidden,
        Unlocked,
        Flag
    };

    const gridSize: number = 12;
    const bombCount: number = 25;

    const [bombs, setBombs] = useState<number>(0);
    const [cellsLeft, setCellsLeft] = useState<number>(0);
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [gameState, setGameState] = useState<Cell[][]>(Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => Cell.Empty)));
    const [gameUnlocks, setGameUnlocks] = useState<State[][]>(Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => State.Hidden)));
    const [topMessage, setTopMessage] = useState<string>("Left Click = unlock | Right Click = flag");

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

    const resetUnlocks = () => {
        setGameUnlocks(Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => State.Hidden)));
    }

    const resetState = () => {
        const newState: Cell[][] = Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => Cell.Empty));
        let placed = 0;
        while (placed < bombCount) {
            const row: number = Math.floor(Math.random() * gridSize);
            const col: number = Math.floor(Math.random() * gridSize);
            if (newState[row][col] !== Cell.Bomb) {
                newState[row][col] = Cell.Bomb;
                placed++;
            }
        }
        setGameState(newState);
    }

    const getCellValue = (row: number, col: number) => {
        if (gameState[row][col] === Cell.Bomb) {
            return <FaBomb />
        }
        let bombsAround = 0;
        for (let i = Math.max(0, row - 1); i <= Math.min(gridSize - 1, row + 1); i++) {
            for (let j = Math.max(0, col - 1); j <= Math.min(gridSize - 1, col + 1); j++) {
                if (gameState[i][j] === Cell.Bomb) {
                    bombsAround++;
                }
            }
        }
        return bombsAround;
    }

    const handleStart = () => {
        resetUnlocks();
        resetState();
        setBombs(bombCount);
        setCellsLeft(gridSize * gridSize - bombCount);
        setTime(0);
        setTopMessage("Left Click = unlock | Right Click = flag")
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const unlockCell = (row: number, col: number) => {
        if (!isRunning || gameUnlocks[row][col] === State.Flag) return;
        setGameUnlocks(prev => {
            const copy = prev.map(row => [...row]);
            copy[row][col] = State.Unlocked;
            return copy;
        });
        if (gameState[row][col] === Cell.Bomb) {
            handleStop();
            setTopMessage("Oops..")
        }
        if (cellsLeft === 1) {
            handleStop();
            setTopMessage("You win!")
        };
        setCellsLeft((prev) => prev - 1);
    };

    const setFlag = (row: number, col: number) => {
        if (!isRunning || gameUnlocks[row][col] === State.Unlocked) return;
        const copy = gameUnlocks.map(row => [...row]);
        const current = copy[row][col];
        if (current === State.Hidden) {
            copy[row][col] = State.Flag;
            setBombs(prev => prev - 1);
        } else if (current === State.Flag) {
            copy[row][col] = State.Hidden;
            setBombs(prev => prev + 1);
        }
        setGameUnlocks(copy);
    };

    return (
        <div id="minesweeper" className="w-100 h-100 d-flex row p-3">
            <div className="col-2">
                <p>Bombs left: {bombs}</p>
            </div>
            <div className="col-8 d-flex flex-column justify-content-center align-items-center">
                <h5>{topMessage}</h5>
                <table className="table table-dark">
                    {Array.from({length: gridSize}, (_, key) => key).map(function(_, i) {
                        return (
                            <tr key={i}>
                                {Array.from({length: gridSize}, (_, key) => key).map(function(_, j) {
                                    return (
                                        <td key={j}>
                                            <button
                                                className="btn w-100 h-100"
                                                style={
                                                    (gameUnlocks && gameUnlocks[i][j] == State.Unlocked) ? 
                                                    {backgroundColor: `hsl(${params.colorH}, 50%, 50%)`} :
                                                    undefined
                                                }
                                                onClick={() => unlockCell(i, j)}
                                                onContextMenu={(e) => {
                                                    e.preventDefault();
                                                    setFlag(i, j);
                                                }}
                                            >
                                                {gameUnlocks[i][j] == State.Flag ? <FaFlag /> :
                                                    gameUnlocks[i][j] == State.Unlocked ? getCellValue(i, j) :
                                                    (gameUnlocks[i][j] == State.Hidden && isRunning) ? "?" : ""
                                                }
                                            </button>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
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

export { Minesweeper }
