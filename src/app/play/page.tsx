'use client'
import React, { useState, useEffect } from 'react';
import './style.css';
import '../globals.css';
import MineSelection from '@/Components/selection'; // Make sure to import the MineSelection component
import { cn } from "@/utils/cn";
import { Spotlight } from "@/Components/ui/Spotlight";
const MineGamblingGame: React.FC = () => {
    const [clickedBoxes, setClickedBoxes] = useState<boolean[]>(Array(25).fill(false));
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [bombs, setBombs] = useState<number[]>([]);
    const [selectedMines, setSelectedMines] = useState({ id: 10, name: '10 Mines' }); // Default number of mines

    // Function to place bombs randomly
    const placeBombs = () => {
        const bombIndices: number[] = [];
        while (bombIndices.length < selectedMines.id) {
            const index = Math.floor(Math.random() * 25);
            if (!bombIndices.includes(index)) {
                bombIndices.push(index);
            }
        }
        setBombs(bombIndices);
    };

    useEffect(() => {
        placeBombs();
    }, [selectedMines]);

    const handleClick = (index: number) => {
        if (isGameOver || clickedBoxes[index]) return; // Do nothing if game is over or the box is already clicked
        const newClickedBoxes = [...clickedBoxes];
        newClickedBoxes[index] = true;
        setClickedBoxes(newClickedBoxes);

        if (bombs.includes(index)) {
            setIsGameOver(true); // Game over if clicked on a bomb
        }
    };

    const resetGame = () => {
        setClickedBoxes(Array(25).fill(false));
        setIsGameOver(false);
        placeBombs();
    };

    return (
        <div className="relative antialiased bg-grid-white/[0.02] ">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"

            />
            <div className="relative z-10">
                <h1 className={'text-6xl text-white text-center font-extrabold pt-10 pb-10'}>mis-Stake</h1>

                <div className='flex flex-row-reverse items-baseline justify-around pt-8 pr-10 pl-10'>
                    <div className="grid bg-gray-800">
                        {clickedBoxes.map((clicked, index) => (
                            <div
                                key={index}
                                className={`box ${clicked ? 'clicked' : ''}`}
                                onClick={() => handleClick(index)}
                            >
                                {clicked && bombs.includes(index) && <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/009/350/665/small_2x/explosive-bomb-black-png.png"
                                    alt="bomb"/>}

                                {clicked && !bombs.includes(index) &&
                                    <img src="https://freepngimg.com/thumb/diamond/30147-1-diamond-vector-clip-art-thumb.png"
                                         alt="diamond"/>}
                            </div>
                        ))}
                        <div>
                            <button className={'group/button rounded-lg bg-[#222222] text-black mt-6'} onClick={resetGame}>
                                <span className={
                                    'block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#222222] bg-green-400 px-4 py-1 text-sm font-medium tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0'
                                }
                                >
                                    Reset Game
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className={'flex flex-col '}>
                        <MineSelection selectedMines={selectedMines} setSelectedMines={setSelectedMines}/>
                        {isGameOver && <p className='pixelify-sans text-6xl text-red-600 mt-4 '>Game Over!</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MineGamblingGame