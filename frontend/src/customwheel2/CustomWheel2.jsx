import React, { useEffect, useRef, useState } from "react";
import "./customwhell2.css";
import SlotMechine from "../slotMechine/SlotMechine";
import SecoundPrizeHome from "../SecoundPrize/SecoundPrizeHome";
import logo from "../images/logo/25.png";
const audio = require("../../src/assets/bicycle-wheel-spinning-49716-[AudioTrimmer.com].mp3");

function CustomWheel2({ no, letter, digits, rotate, setLiveDraw }) {
  const [rotationAngleNumber, setRotationAngleNumber] = useState(0);
  const [rotationAngleLetter, setRotationAngleLetter] = useState(0);
  const [inputValueNumber, setInputValueNumber] = useState("");
  const [inputValueLetter, setInputValueLetter] = useState("");
  const [zoomed, setZoomed] = useState("");
  const [endval, setEndval] = useState(null);
  const [status, setStatus] = useState(true);
  const letterWheelRef = useRef(null);
  const digitsRef = useRef(null);

  const duration = 2;

  useEffect(() => {
    setInputValueNumber(no);
    setInputValueLetter(letter);
    setEndval(digits);

    // Zoom after 8 seconds
    const zoomTimer = setTimeout(() => {
      setZoomed("zoomed");
    }, 7000);

    const scrollLettersTimer = setTimeout(() => {
      if (letterWheelRef.current) {
        letterWheelRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 16500);

    const digitsTimer = setTimeout(() => {
      if (digitsRef.current) {
        digitsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 18000);

    const changeState = setTimeout(() => {
      setStatus(false);
    }, 24000);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(scrollLettersTimer);
      clearTimeout(digitsTimer);
      clearTimeout(changeState);
    };
  }, [no, letter, digits]);

  const numbers = [
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
  ];
  const letters = ["A", "B", "C", "D", "E", "G", "H", "J", "K", "L"];

  const degree = 360 / numbers.length;
  const alphabetDeg = 360 / letters.length;

  const handleRotate = () => {
    var audio1 = new Audio(audio);

    const num = parseInt(inputValueNumber);
    const letterIndex = letters.indexOf(inputValueLetter.toUpperCase());

    if (numbers.includes(num) && letterIndex !== -1) {
      // audio1.play();
      const anglePerItemNumber = 360 / numbers.length;
      const anglePerItemLetter = 360 / letters.length;

      const currentNumberIndex = numbers.indexOf(num);
      const targetAngleNumber =
        360 -
        (currentNumberIndex + 1) * anglePerItemNumber -
        (rotationAngleNumber % 360);

      const targetAngleLetter =
        360 - letterIndex * anglePerItemLetter - (rotationAngleLetter % 360);

      const randomFullRotations = Math.floor(Math.random() * 5 + 3) * 360;

      const numberWheelStyle = document.querySelector(".circle").style;
      const letterWheelStyle = document.querySelector(".letter-circle").style;

      //  letterWheelStyle.transition = `transform 20s cubic-bezier(0.2, 0.9, 0.3, 1)`;
      //  numberWheelStyle.transition = `transform 20s cubic-bezier(0.2, 0.9, 0.3, 1)`;
      numberWheelStyle.transition = `transform 15s cubic-bezier(0.4, 1, 0.2, 0.9)`;
      letterWheelStyle.transition = `transform 15s cubic-bezier(0.4, 1, 0.2, 0.9)`;

      setRotationAngleNumber(
        rotationAngleNumber + targetAngleNumber + randomFullRotations
      );
      setRotationAngleLetter(
        rotationAngleLetter + targetAngleLetter + randomFullRotations
      );

      setTimeout(() => {
        numberWheelStyle.transition = `none`;
        letterWheelStyle.transition = `none`;
        // audio1.pause();
      }, 15000); // 15 seconds
    } else {
      alert(
        "Please enter a valid number (30-45) and letter (A, B, C, D, E, G, H, J, K, L)"
      );
    }
  };
  useEffect(() => {
    if (rotate && inputValueNumber && inputValueLetter) {
      handleRotate();
    }
  }, [rotate, inputValueNumber, inputValueLetter]);

  return status ? (
    <div className={`${zoomed ? "zoomed" : ""} h-full relative wheel_main`}>
      <div className="flex h-full overflow-hidden wheel_second_main">
        <div className="w-1/3 h-full bg-gray-300 flex flex-col justify-between main_spin">
          <div className="relative">
            <div className="w-full h-1 bg-white spin_top_line">
              <hr className="h-1.5 border border-2 border-black overflow-auto circle_hr" />
            </div>
            <div className="arrow"></div>

            <ul
              className="circle"
              style={{ transform: `rotate(${rotationAngleNumber}deg)` }}
            >
              <div className="okk">
                {numbers.map((numb, i) => {
                  const rotateDegree = degree * i + 8;
                  console.log("56565", rotateDegree, degree);
                  return (
                    <li
                      key={i}
                      className="wheel_li"
                      style={{
                        transform: `rotate(${rotateDegree}deg) skewY(-60deg)`,
                      }}
                    >
                      <div
                        className="text"
                        contentEditable="true"
                        spellCheck="false"
                      >
                        {numb}
                      </div>
                      <div className="logo_container">
                        <img src={logo} alt="logo" className="logo" />
                      </div>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>

          <div className="relative" ref={letterWheelRef}>
            <div className="w-full h-1 bg-white z-20 spin_top_line">
              <hr className="h-1.5 border border-2 border-black overflow-auto circle_hr" />
            </div>
            <div className="letter_Arrow"></div>

            <ul
              className="letter-circle"
              style={{ transform: `rotate(${rotationAngleLetter}deg)` }}
            >
              <div className="letter_okk">
                {letters.map((letter, i) => {
                  const rotateDegree = alphabetDeg * i;
                  return (
                    <li
                      key={i}
                      className="wheel_li"
                      style={{
                        transform: `rotate(${rotateDegree}deg) skewY(-60deg)`,
                      }}
                    >
                      <div
                        className="letter-text"
                        contentEditable="true"
                        spellCheck="false"
                      >
                        {letter}
                      </div>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
        <div className="w-[35px] h-full bg-black ml-[-20px] z-10 black_border"></div>

        <div className="bg-black h-auto w-2/3 border-l-2 slot_component" ref={digitsRef} >
          <SlotMechine duration={15} endNumbers={endval} setvalueStart rotate />
        </div>
      </div>

      <div className="inputs hidden">
        <input
          type="number"
          value={inputValueNumber}
          onChange={(e) => setInputValueNumber(e.target.value)}
          placeholder="Enter number (30-45)"
          className="input-field"
        />
        <input
          type="text"
          value={inputValueLetter}
          onChange={(e) => setInputValueLetter(e.target.value)}
          placeholder="Enter letter (A, B, C, D, E, G, H, J, K, L)"
          className="input-field"
        />
        <button className="spin-button" onClick={handleRotate}>
          Spin
        </button>
      </div>
    </div>
  ) : (
    <SecoundPrizeHome setLiveDraw={setLiveDraw} />
  );
}

export default CustomWheel2;
