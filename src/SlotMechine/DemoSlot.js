// SlotMachine.js
import React, { useState } from 'react';
import './slotmechine.css'; // Import CSS file for styles

// Symbols you want on the reels
const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇'];

const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

const SlotMachine = () => {
    const [reels, setReels] = useState(['🍒', '🍒', '🍒']); // Initial state with default symbols
    const [animating, setAnimating] = useState(false);

    const spin = () => {
        setAnimating(true);
        setTimeout(() => {
            setReels([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);
            setAnimating(false);
        }, 1000); // Duration of the animation
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <div className="reel-container">
                {reels.map((symbol, index) => (
                    <span
                        key={index}
                        className={`reel-symbol ${animating ? 'animate' : ''}`}
                    >
                        {symbol}
                    </span>
                ))}
            </div>
            <button onClick={spin} style={{ padding: '10px 20px', fontSize: '1em' }}>
                Spin
            </button>
        </div>
    );
};

export default SlotMachine;
