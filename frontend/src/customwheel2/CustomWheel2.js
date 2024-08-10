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
import "./customwhell2.css";

function CustomWheel2() {
  const [rotationAngleNumber, setRotationAngleNumber] = useState(0);
  const [rotationAngleLetter, setRotationAngleLetter] = useState(0);
  const [inputValueNumber, setInputValueNumber] = useState("");
  const [inputValueLetter, setInputValueLetter] = useState("");

  const letters = ["A", "B", "C", "D", "G", "M", "N", "O", "P"];

  const handleRotate = () => {
    const num = parseInt(inputValueNumber);
    const letterIndex = letters.indexOf(inputValueLetter.toUpperCase());

    if (num >= 1 && num <= 12 && letterIndex !== -1) {
      const anglePerItemNumber = 360 / 12;
      const anglePerItemLetter = 360 / letters.length;

      const randomFullRotations = Math.floor(Math.random() * 5 + 3) * 360;
      const targetAngleNumber =
        (12 - num + 1) * anglePerItemNumber + randomFullRotations;
      const targetAngleLetter =
        (letters.length - letterIndex) * anglePerItemLetter +
        randomFullRotations;

      setRotationAngleNumber(rotationAngleNumber + targetAngleNumber);
      setRotationAngleLetter(rotationAngleLetter + targetAngleLetter);
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
          <div className="arrow"></div>

          {/* Number Circle */}
          <ul
            className="circle"
            style={{ transform: `rotate(${rotationAngleNumber}deg)` }}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <li key={i}>
                <div className="text" contentEditable="true" spellCheck="false">
                  {i + 1}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="letter_Arrow"></div>
          {/* Letter Circle */}
          <ul
            className="letter-circle"
            style={{ transform: `rotate(${rotationAngleLetter}deg)` }}
          >
            {letters.map((letter, i) => (
              <li key={i}>
                <div
                  className="letter-text"
                  contentEditable="true"
                  spellCheck="false"
                >
                  {letter}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Input Fields */}
      <input
        type="number"
        value={inputValueNumber}
        onChange={(e) => setInputValueNumber(e.target.value)}
        placeholder="Enter number (1-12)"
      />
      <input
        type="text"
        value={inputValueLetter}
        onChange={(e) => setInputValueLetter(e.target.value)}
        placeholder="Enter letter (A, B, C, D, G, M, N, O, P)"
      />
      <button className="spin-button" onClick={handleRotate}>
        Spin
      </button>
    </div>
  );
}

export default CustomWheel2;
