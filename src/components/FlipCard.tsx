import "./FlipCard.css";
import { useState, useEffect } from "react";
import { FaLaptopCode, FaHeadphones, FaMicrophone, FaMobile, FaVrCardboard, FaPlay, FaPause, FaCode, FaKeyboard, FaRobot, FaScrewdriver } from "react-icons/fa";

type Params = {
    colorH: number
}

function FlipCard(params: Params) {
    type Card = {
        image: React.ReactElement,
        isUnlocked: boolean
    }


    const cardsAmount: number = 12;
    const cardImages: React.ReactElement[] = [
        <FaLaptopCode />,
        <FaHeadphones />,
        <FaMicrophone />,
        <FaMobile />,
        <FaVrCardboard />,
        <FaPlay />,
        <FaPause />,
        <FaCode />,
        <FaKeyboard />,
        <FaRobot />,
        <FaScrewdriver />
    ];

    const [score, setScore] = useState<number>(0);
    const [time, setTime] = useState<number>(0);
    const [cards, setCards] = useState<Card[]>(Array.from({ length: cardsAmount }, () => ({ image: cardImages[0], isUnlocked: false })));
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [topMessage, setTopMessage] = useState<string>("Find card pairs");
    const [openedCards, setOpenedCards] = useState<number[]>([]);

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
        if (openedCards.length === 2) {
            const [first, second] = openedCards;
            if (cards[first].image === cards[second].image) {
                const newCards = [...cards];
                newCards[first].isUnlocked = true;
                newCards[second].isUnlocked = true;
                setCards(newCards);
                    setOpenedCards([]);
                    setScore((prev) => {
                    const newScore = prev + 2;
                    if (newScore === cardsAmount) {
                        handleStop();
                        setTopMessage("You win!");
                    }
                    return newScore;
                });
            } else {
                setIsPending(true);
                setTimeout(() => {
                    setOpenedCards([]);
                    setIsPending(false);
                }, 1000);
            }
        }
    }, [openedCards]);

    const shuffled = (array: any) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const resetState = () => {
        const chosenImages: React.ReactElement[] = shuffled(cardImages).slice(0, cardsAmount / 2);
        const newState: Card[] = [];
        for (let i = 0; i < cardsAmount; i++) {
            newState.push({ image: chosenImages[Math.floor(i / 2)], isUnlocked: false });
        }
        console.log(newState);
        setOpenedCards([]);
        setCards(shuffled(newState));
    };

    const handleStart = () => {
        resetState();
        setScore(0);
        setTime(0);
        setTopMessage("Find card pairs");
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const openCard = (index: number) => {
        if (!isRunning || isPending) return;
        if (cards[index].isUnlocked || openedCards.indexOf(index) !== -1) return;
        setOpenedCards((prev) => [...prev, index]);
    }

    return (
        <div id="flipcard" className="w-100 h-100 d-flex row p-3">
            <div className="col-2">
                <p>Score: {score}</p>
            </div>
            <div className="col-8 d-flex flex-column justify-content-center align-items-center">
                <h5>{topMessage}</h5>
                <div className="d-flex flex-wrap justify-content-evenly align-items-center gap-2">
                    {cards.map(function (card, i) {
                        return (
                            <div
                                key={i}
                                className="gamecard"
                                onClick={() => openCard(i)}
                                style={
                                    (card.isUnlocked || openedCards.indexOf(i) !== -1) ? {backgroundColor: `hsl(${params.colorH}, 50%, 50%)`} : undefined
                                }
                            >
                                {(card.isUnlocked || openedCards.indexOf(i) !== -1) ? card.image :
                                    isRunning ? "?" : ""}
                            </div>
                        )
                    })}
                </div>
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

export { FlipCard }
