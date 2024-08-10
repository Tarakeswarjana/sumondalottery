import React from 'react'
import CustomWheel3 from '../customWheel3/customWheel3'
import("./home.css")

function Home() {
    return (
        <div>
            <div className='top'>top</div>
            <div className='content col-md-12'>

                <div className='fist'>
                    left
                </div>
                <div className='second'>
                    <div className='second-left'>
                        <div className='second-left-top'>    <CustomWheel3 stopElement='e' /></div>
                        <div className='second-left-bottom'><CustomWheel3 /></div>
                    </div>
                    <div className='second-right'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div></div>
                <div className='third'>side</div>
            </div>
            <div className='bottom'>bottom</div>
        </div>
    )
}

export default Home