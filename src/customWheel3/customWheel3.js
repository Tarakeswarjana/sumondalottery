import React, { useState } from 'react';
import "./customWheel3.css";
import styled, { keyframes } from 'styled-components';

function CustomWheel3({ segments, stopElement, timeofRotation, handleEndSpin }) {
  console.log(stopElement, "stopelement")
  const [rotateClass, setRotateClass] = useState('circle');
  const [finalValue, setFinalValue] = useState(null);
  let arr = segments = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
  let index = segments.findIndex(ele => ele === stopElement)

  console.log(index, "ooppp")

  const handleEnding = (endv) => {
    // setTimeout(() => {
    setFinalValue(endv)
    // }, 2000)
  }

  const startRotate = keyframes`
    100% {
      transform: rotate(360deg);
    }
  `;
  const stopRotate = (startRotation) => keyframes`
from {
  transform: rotate(${startRotation}deg); /* Initial rotation angle */
}

to {
  transform: rotate(${(360 / 12) * (12 - (index))}deg); /* Final rotation angle */
}
`;

  //12 total length, 5 ='e'  which no it will stay  


  const Circle = styled.ul`
   width:25em;
    height:25em;
    border:1px solid black;
    position:relative;
    padding: 0;
    margin: 1em auto;
    border-radius: 50%;
    list-style: none;
    overflow: hidden;
  &.start-rotate {
    animation: ${startRotate} 1s linear infinite;
  }

  &.stop-rotate {
    animation: ${stopRotate} 1s linear forwards;
  }
`;

  const handleRotate = () => {
    setRotateClass('circle start-rotate');
    setTimeout(() => {
      setRotateClass('circle stop-rotate');
      // const finalSegment = Math.floor((360 - (360 / 12) * index + 1));
      handleEnding(arr[index])
      // setFinalValue(arr[index]);

      // handleEndSpin(arr[index])
    }, 2000);
  };


  return (
    <div className='container'>
      <div className='arrow'></div>
      <Circle className={rotateClass} >
        {arr.map((ele, i) => (
          <li style={{ transform: `rotate(${i * 30}deg) skewY(-60deg)}}` }} key={i}>
            <div className="text"
              contentEditable='true'
              spellCheck='false'
            >{ele}</div>
          </li>
        ))}
      </Circle>
      <button className='spin-button' onClick={handleRotate}>Spin</button>
      {finalValue !== null && <div className='result'>Result: {finalValue}</div>}
    </div>
  );
}

export default CustomWheel3;
