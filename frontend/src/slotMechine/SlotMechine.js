import React, { useState, useEffect, useRef, useMemo } from 'react';
import './slotMechine.css'; // Make sure to include the CSS here
import SlotCounter from 'react-slot-counter';
const audio = require("../../src/assets/wheel-spin-click-slow-down-101152.mp3")
const SlotMechine = ({ duration, endNumbers }) => {

    const [isspinn, setisSpinn] = useState(false)

    const endValue = useMemo(() => {
        if (typeof endNumbers !== 'string') {
            return null; // Ensure endNumbers is a string before processing
        }

        return endNumbers.split('').map((char, index) => (
            <span key={index}>{char}</span>
        ));
    }, [endNumbers]);


    const counterRef = useRef(null);

    const startAnimation = () => {
        var audio1 = new Audio(audio);
        audio1.play();

        setisSpinn(true)
        setTimeout(() => {

            audio1.pause();
        }, duration * 1000)

        if (counterRef.current) {
            counterRef.current.startAnimation();
        }
    };

    const staticStartVal = [
        <span>0</span>,
        <span>0</span>,
        <span>0</span>,
        <span>0</span>,
        <span>0</span>,
    ]


    return (
        <>
            <div>
                <SlotCounter
                    ref={counterRef}
                    startValue={
                        staticStartVal
                    }
                    value={isspinn && endValue ? endValue : staticStartVal}
                    animateUnchanged
                    direction="bottom-up"
                    autoAnimationStart={false}
                    duration={duration}
                />



                <button
                    type="button"
                    className="example-button"
                    onClick={startAnimation}
                >
                    Play
                </button>
            </div>

        </>
    )
};

export default SlotMechine;
