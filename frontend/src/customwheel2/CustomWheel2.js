// import React, { useState } from 'react'
// import "./customwhell2.css"

// function CustomWheel2() {
//     const [rotateClass, setrotateClass] = useState('circle')
//     const handleRotate = () => {

//         setrotateClass('circle start-rotate')
//         setTimeout(() => {
//             setrotateClass('circle start-rotate stop-rotate')
//         }, 2000)
//     }

//     return (
//         <div className=''>
//             <div className='arrow'></div>
//             <ul className={rotateClass}>

//                 <li>
//                     <div className="text"
//                         contentEditable='true'
//                         spellCheck='false'
//                     >1</div>
//                 </li>
//                 <li>
//                     <div className="text"
//                         contentEditable='true'
//                         spellCheck='false'
//                     >2</div>
//                 </li>
//                 <li>
//                     <div className="text"
//                         contentEditable='true'
//                         spellCheck='false'
//                     >3</div>
//                 </li>
//                 <li>
//                     <div className="text"
//                         contentEditable='true'
//                         spellCheck='false'
//                     >4</div>
//                 </li>
//                 <li>
//                     <div className="text"
//                         contentEditable='true'
//                         spellCheck='false'
//                     >5</div>
//                 </li>
//                 <li>
//                     <div className="text"
//                         contentEditable='true'
//                         spellCheck='false'
//                     >6</div>
//                 </li>
//                 <li>
//                     <div className="text"
//                         contentEditable='true'
//                         spellCheck='false'
//                     >7</div>
//                 </li>
//                 <li>
//                     <div className="text"
//                         contentEditable='true'
//                         spellCheck='false'
//                     >8</div>
//                 </li>
//                 <li>
//                     <div className="text"
//                         contentEditable='true'
//                         spellCheck='false'
//                     >9</div>
//                 </li>
//                 <li>
//                     <div className="text"
//                         contentEditable='true'
//                         spellCheck='false'
//                     >10</div>
//                 </li>
//                 <li>
//                     <div className="text"
//                         contentEditable='true'
//                         spellCheck='false'
//                     >11</div>
//                 </li>
//                 <li>
//                     <div className="text"
//                         contentEditable='true'
//                         spellCheck='false'
//                     >12</div>
//                 </li>

//             </ul>
//             <button className='spin-button' onClick={handleRotate}>Spin</button>
//         </div>
//     )
// }

// export default CustomWheel2

// import React, { useState } from "react";
// import "./customwhell2.css";

// function CustomWheel2() {
//   const [rotationAngle, setRotationAngle] = useState(0);
//   console.log("rotationAngle", rotationAngle)
//   const [inputValue, setInputValue] = useState("");

//   const handleRotate = () => {
//     const num = parseInt(inputValue);
//     if (num >= 1 && num <= 12) {
//       const anglePerItem = 360 / 12;
//       const randomFullRotations = Math.floor(Math.random() * 5 + 3) * 360;
//       const targetAngle = (12 - num + 1) * anglePerItem + randomFullRotations;

//       setRotationAngle(rotationAngle + targetAngle);
//     } else {
//       alert("Please enter a number between 1 and 12");
//     }
//   };

//   return (
//     <div>
//       <div className="arrow"></div>
//       <ul
//         className="circle"
//         style={{ transform: `rotate(${rotationAngle}deg)` }}
//       >
//         {Array.from({ length: 12 }, (_, i) => (
//           <li key={i}>
//             <div className="text" contentEditable="true" spellCheck="false">
//               {i + 1}
//             </div>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="number"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Enter number (1-12)"
//       />
//       <button className="spin-button" onClick={handleRotate}>
//         Spin
//       </button>
//     </div>
//   );
// }

// export default CustomWheel2;

import React, { useState } from "react";
import styled from 'styled-components';
import "./customwhell2.css";
// const audio = require('../assets/wheel-spin-click-slow-down-101152.mp3')
const audio = require('../assets/bicycle-wheel-spinning-49716-[AudioTrimmer.com].mp3')



function CustomWheel2({ rotateTime, segments, endResult }) {


  // const LetterCircle = styled.ul`
  //   list-style: none;
  //   padding: 0;
  //   margin: 0;
  //   position: relative;
  //   width: 300px;
  //   height: 300px;
  //   border-radius: 50%;
  //   border: 2px solid #333;
  //   overflow: hidden;
  //   transform: rotate(${props => props.rotationAngle}deg);
  //   transition: transform ${props => props.rotateTime}s ease-in-out;
  // `;

  const LetterItem = styled.li`
    position: absolute;
    width: 100%;
    text-align: center;
    transform-origin: 50% 100%;
    transform: rotate(${props => props.rotation}deg) skewY(-60deg);  `;

  const LetterText = styled.div`
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    font-size: 18px;
    color: #333;
  `;






  const [rotationAngleLetter, setRotationAngleLetter] = useState(0);

  //  const[ind,setind]=useState(-1)
  const letters = segments

  const handleRotate = () => {

    const letterIndex = letters.indexOf(endResult.toUpperCase());
    console.log(letterIndex, "llll")

    if (letterIndex !== -1) {

      const anglePerItemLetter = 360 / letters.length;

      const randomFullRotations = rotateTime * 360;

      // const targetAngleLetter =
      //   (letters.length - letterIndex) * anglePerItemLetter +
      //   randomFullRotations;

      const targetAngleLetter = randomFullRotations + (anglePerItemLetter * letterIndex)



      // setRotationAngleLetter(rotationAngleLetter + targetAngleLetter);
      console.log(Math.floor(rotationAngleLetter + targetAngleLetter), "kkk")
      // setRotationAngleLetter(rotationAngleLetter + targetAngleLetter + anglePerItemLetter);
      setRotationAngleLetter(Math.floor(rotationAngleLetter + targetAngleLetter))
      var audio1 = new Audio(audio);
      console.log(audio1)
      audio1.play()
      setTimeout(() => {
        audio1.pause()

      }, Number(rotateTime * 1000))
    } else {
      alert(
        "Please enter a valid number (1-12) and letter (A, B, C, D, G, M, N, O, P)"
      );
    }
  };

  return (
    <div>
      <div style={{ display: "flex" }}>


        <div>
          <div className="letter_Arrow"></div>
          {/* Letter Circle */}
          <ul
            className="letter-circle"
            style={{ transform: `rotate(${rotationAngleLetter}deg)`, transition: `transform ${rotateTime}s ease-in-out`, }}
          >
            {letters.map((letter, i) => (

              <LetterItem rotation={`${i * (360 / letters.length)}`} >
                <div
                  className="letter-text"
                  contentEditable="true"
                  spellCheck="false"
                >
                  {letter}
                </div>
              </LetterItem>
            ))}
          </ul>
        </div>
      </div>


      <button className="spin-button" onClick={handleRotate}>
        Spin
      </button>
    </div>
  );
}

export default CustomWheel2;
