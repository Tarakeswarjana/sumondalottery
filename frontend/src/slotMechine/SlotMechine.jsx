import React, { useState, useRef, useMemo, useEffect } from "react";
import "./slotMechine.css"; // Make sure to include the CSS here
import SlotCounter from "react-slot-counter";
const audio = require("../../src/assets/wheel-spin-click-slow-down-101152.mp3");
const SlotMechine = ({ duration, endNumbers, rotate }) => {
  const [isspinn, setisSpinn] = useState(false);

  // const endValue = useMemo(() => {
  //   if (typeof endNumbers !== "string") {
  //     return null; // Ensure endNumbers is a string before processing
  //   }

  //   return endNumbers
  //     .split("")
  //     .map((char, index) => <span key={index}>{char}</span>);
  // }, [endNumbers]);

  // console.log("2345", typeof(endNumbers), endValue)

  const counterRef = useRef(null);

  const startAnimation = () => {
    var audio1 = new Audio(audio);
    // audio1.play();

    setisSpinn(true);
    setTimeout(() => {
      // audio1.pause();
    }, duration * 1000);

    if (counterRef.current) {
      counterRef.current.startAnimation();
    }
  };

  useEffect(() => {
    if (rotate && endNumbers) startAnimation();
  }, [rotate, endNumbers]);

  const staticStartVal = [
    <span>0</span>,
    <span>0</span>,
    <span>0</span>,
    <span>0</span>,
    <span>0</span>,
  ];

  return (
    <>
      <div className="w-full h-1 bg-white"></div>
      <div className="h-[120px] w-[290px] bg-white flex flex-col justify-center item-center">
        <div className="digits_dot">
          <hr className="dot" />
          <span>PXWELL</span>
          <span>PXWELL</span>
          <hr className="dot" />
        </div>
        <div className="bg-gray-300 w-[92%] mx-auto h-[200px] flex justify-center item-center p-[13px]">
          <div className="bg-gray-500 ">
            <SlotCounter
              ref={counterRef}
              startValue={staticStartVal}
              // value={isspinn && endValue ? endValue : staticStartVal}
              value={isspinn && endNumbers ? endNumbers : staticStartVal}
              animateUnchanged
              direction="bottom-up"
              autoAnimationStart={false}
              duration={duration}
            />
          </div>
        </div>
        <div className="digits_dot">
          <hr className="dot" />
          <span>SINGAPORE LOTTERIES</span>
          <hr className="dot" />
        </div>
      </div>
    </>
  );
};

export default SlotMechine;
