import "./Snake.css";
import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Params = {
    colorH: number
}

function Snake(params: Params) {
    enum Cell {
        Snake,
        Empty,
        Food
    };

    enum Direction {
        Up,
        Down,
        Left,
        Right
    };

    type Position = {
        x: number,
        y: number
    };

    const gridSize: number = 12;
    const initialLength: number = 2;

    const [score, setScore] = useState<number>(0);
    const [time, setTime] = useState<number>(0);
    const [gameState, setGameState] = useState<Cell[][]>(Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => Cell.Empty)));
    const [snake, setSnake] = useState<Position[]>([]);
    const [direction, setDirection] = useState<Direction>(Direction.Down);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [topMessage, setTopMessage] = useState<string>("Use WASD controls to move");

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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isRunning || isPending) return;
            setIsPending(true);
            switch (e.key) {
                case 'w':
                    if (direction !== Direction.Down) {
                        setDirection(Direction.Up);
                    }
                    break;
                case 'a':
                    if (direction !== Direction.Right) {
                        setDirection(Direction.Left);
                    }
                    break;
                case 's':
                    if (direction !== Direction.Up) {
                        setDirection(Direction.Down);
                    }
                    break;
                case 'd':
                    if (direction !== Direction.Left) {
                        setDirection(Direction.Right);
                    }
                    break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isRunning]);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            moveSnake();
        }, 200);

        return () => clearInterval(interval);
    }, [isRunning, snake, direction, gameState]);

    const handleStart = () => {
        resetState();
        setScore(0);
        setTime(0);
        setTopMessage("Use WASD controls to move");
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const moveSnake = () => {
        if (snake.length === 0) return;
        const head = snake[0];
        let newHead: Position = head;
        switch (direction) {
            case Direction.Up:
                newHead = { x: head.x, y: (head.y + gridSize - 1) % gridSize };
                break;
            case Direction.Down:
                newHead = { x: head.x, y: (head.y + 1) % gridSize };
                break;
            case Direction.Left:
                newHead = { x: (head.x + gridSize - 1) % gridSize, y: head.y };
                break;
            case Direction.Right:
                newHead = { x: (head.x + 1) % gridSize, y: head.y };
                break;
        }
        if (gameState[newHead.y][newHead.x] === Cell.Snake && head !== newHead) {
            handleStop();
            setTopMessage("Oops...");
            return;
        }
        const newSnake = [newHead, ...snake];
        const newState = gameState.map(row => [...row]);
        if (newState[newHead.y][newHead.x] === Cell.Food) {
            setScore(score + 1);
            spawnFood(newState);
        } else {
            const tail = newSnake.pop();
            if (tail) newState[tail.y][tail.x] = Cell.Empty;
        }
        newState[newHead.y][newHead.x] = Cell.Snake;
        setSnake(newSnake);
        setGameState(newState);
        setIsPending(false);
    };

    const spawnFood = (state: Cell[][]) => {
        while (true) {
            const row = Math.floor(Math.random() * gridSize);
            const col = Math.floor(Math.random() * gridSize);
            if (state[row][col] === Cell.Empty) {
                state[row][col] = Cell.Food;
                break;
            }
        }
    }

    const resetState = () => {
        const newState: Cell[][] = Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => Cell.Empty));
        const row: number = Math.floor(Math.random() * gridSize);
        const col: number = Math.floor(Math.random() * gridSize);
        const directions: any = Object.values(Direction);
        const random_direction: Direction = directions[Math.floor(Math.random() * directions.length)];
        const tail: Position[] = [];
        for (let i = 0; i < initialLength - 1; i++) {
            switch (random_direction) {
                case Direction.Up:
                    tail.push({x: row, y: (col + 1) % gridSize});
                    break;
                case Direction.Down:
                    tail.push({x: row, y: (col + gridSize - 1) % gridSize});
                    break;
                case Direction.Left:
                    tail.push({x: (row + 1) % gridSize, y: col});
                    break;
                case Direction.Right:
                    tail.push({x: (row + gridSize - 1) % gridSize, y: col});
                    break;
            }
        }
        setGameState(newState);
        setSnake([{x: row, y: col}, ...tail]);
        setDirection(random_direction);
        spawnFood(newState);
    }

    return (
        <div id="snake" className="w-100 h-100 d-flex row p-3">
                    <div className="col-2">
                        <p>Score: {score}</p>
                        <p>Direction: {(() => {
                            switch (direction) {
                                case Direction.Up:
                                    return <FaArrowUp />;
                                case Direction.Down:
                                    return <FaArrowDown />;
                                case Direction.Left:
                                    return <FaArrowLeft />;
                                case Direction.Right:
                                    return <FaArrowRight />;
                                default:
                                    return "Click to move";
                            }
                        })()}
                        </p>
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-center align-items-center">
                        <h5>{topMessage}</h5>
                        <table className="table">
                            {Array.from({length: gridSize}, (_, key) => key).map(function(_, i) {
                                return (
                                    <tr key={i}>
                                        {Array.from({length: gridSize}, (_, key) => key).map(function(_, j) {
                                            return (
                                                <td
                                                    key={j}
                                                    style={
                                                        gameState[i][j] === Cell.Food ? {backgroundColor: `hsl(${(params.colorH + 180) % 360}, 50%, 50%)`} : 
                                                        gameState[i][j] === Cell.Snake ? {backgroundColor: `hsl(${params.colorH}, 50%, 50%)`} :
                                                        undefined
                                                    }
                                                >
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

export { Snake }
