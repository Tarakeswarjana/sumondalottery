import React, { useState } from 'react'
import "./customwhell2.css"

function CustomWheel2() {
    const [rotateClass, setrotateClass] = useState('circle')
    const handleRotate = () => {

        setrotateClass('circle start-rotate')
        setTimeout(() => {
            setrotateClass('circle start-rotate stop-rotate')
        }, 3000)
    }
    const handEndSpinn = () => {

    }

    return (
        <div className=''>
            <div className='arrow'></div>
            <ul className={rotateClass}>

                <li>
                    <div className="text"
                        contentEditable='true'
                        spellCheck='false'
                    >1</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable='true'
                        spellCheck='false'
                    >2</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable='true'
                        spellCheck='false'
                    >3</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable='true'
                        spellCheck='false'
                    >4</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable='true'
                        spellCheck='false'
                    >5</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable='true'
                        spellCheck='false'
                    >6</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable='true'
                        spellCheck='false'
                    >7</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable='true'
                        spellCheck='false'
                    >8</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable='true'
                        spellCheck='false'
                    >9</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable='true'
                        spellCheck='false'
                    >10</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable='true'
                        spellCheck='false'
                    >11</div>
                </li>
                <li>
                    <div className="text"
                        contentEditable='true'
                        spellCheck='false'
                    >12</div>
                </li>


            </ul>
            <button className='spin-button' onClick={handleRotate}>Spin</button>
        </div>
    )
}

export default CustomWheel2