import React, { useState } from "react";
import "./customwhell2.css";
import logo from "../images/logo.jpg";
import SlotMechine from "../slotMechine/SlotMechine";

function CustomWheel2() {
  const [rotationAngleNumber, setRotationAngleNumber] = useState(0);
  const [rotationAngleLetter, setRotationAngleLetter] = useState(0);
  const [inputValueNumber, setInputValueNumber] = useState("");
  const [inputValueLetter, setInputValueLetter] = useState("");

  const numbers = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33,
  ];
  const letters = ["A", "B", "C", "D", "G", "M", "N", "O", "P"];
  const degree = 360 / numbers.length;
  const alphabetDeg = 360 / letters.length;

  const handleRotate = () => {
    const num = parseInt(inputValueNumber);
    const letterIndex = letters.indexOf(inputValueLetter.toUpperCase());

    if (numbers.includes(num) && letterIndex !== -1) {
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
      numberWheelStyle.transition = `transform 20s cubic-bezier(0.1, 1, 0.2, 0.9)`;
      letterWheelStyle.transition = `transform 20s cubic-bezier(0.1, 1, 0.2, 0.9)`;

      setRotationAngleNumber(
        rotationAngleNumber + targetAngleNumber + randomFullRotations
      );
      setRotationAngleLetter(
        rotationAngleLetter + targetAngleLetter + randomFullRotations
      );

      setTimeout(() => {
        numberWheelStyle.transition = `none`;
        letterWheelStyle.transition = `none`;
      }, 60000); // 60 second
    } else {
      alert(
        "Please enter a valid number (10-33) and letter (A, B, C, D, G, M, N, O, P)"
      );
    }
  };


  //for slot Mechine 


  const [endval, setEndval] = useState('')



  const duration = 2



  return (
    <div className="h-full">
      <div className="flex h-full">
        <div className="w-1/3 h-full bg-gray-300 flex flex-col justify-between">
          <div className="relative">
            <div className="w-full h-1 bg-white">
              <hr className="h-1.5 border border-2 border-black overflow-auto" />
            </div>
            <div className="arrow"></div>

            {/* Number Circle */}
            <ul
              className="circle"
              style={{ transform: `rotate(${rotationAngleNumber}deg)` }}
            >
              <div className="okk">
                {numbers.map((numb, i) => {
                  const rotateDegree = degree * i;
                  return (
                    <li
                      key={i}
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
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>

          <div className="relative">
            <div className="w-full h-1 bg-white">
              <hr className="h-1.5 border border-2 border-black overflow-auto" />
            </div>
            <div className="letter_Arrow"></div>

            {/* Letter Circle */}
            <ul
              className="letter-circle"
              style={{ transform: `rotate(${rotationAngleLetter}deg)` }}
            >
              {letters.map((letter, i) => {
                const rotateDegree = alphabetDeg * i;
                return (
                  <li
                    key={i}
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
            </ul>
          </div>
        </div>

        <div className="bg-slate-800 h-auto w-2/3">
          <div>   <SlotMechine duration={duration} endNumbers={endval} setvalueStart />

            <label>
              endNo
              <input type="text" value={endval} onChange={(e) => { setEndval(e.target.value) }}></input>
            </label>

          </div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Input Fields */}
      <div className="inputs">
        <input
          type="number"
          value={inputValueNumber}
          onChange={(e) => setInputValueNumber(e.target.value)}
          placeholder="Enter number (1-12)"
          className="input-field"
        />
        <input
          type="text"
          value={inputValueLetter}
          onChange={(e) => setInputValueLetter(e.target.value)}
          placeholder="Enter letter (A, B, C, D, G, M, N, O, P)"
          className="input-field"
        />
        <button className="spin-button" onClick={handleRotate}>
          Spin
        </button>
      </div>
    </div>
  );
}

export default CustomWheel2;
