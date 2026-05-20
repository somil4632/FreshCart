import React from 'react'
import "./Hero.css"
import handicon from "../../assets/hand-icon.png"
const Hero = () => {
    return (
        <div className="hero">
            <div className=" hero-left">
               <div className=" hand-hand-icon">
                <img src="" alt=""/>
            <p>new</p>
            <p>collections</p>
            <p>for everyone</p>
         </div>

         <div>
            <img src={handicon} alt="" height=" 80px" />
              <h2>Best Deals ! Best Prices !</h2>
        </div>
       
            <div className=" hero-right">
        </div>
        </div>
        </div>
    )
}
export default Hero 