import React from 'react'
import "./Hero.css"
import handicon from "../../assets/hand-icon.png"
import arrowicon from "../../assets/arrow icon.webp"
import mango from "../../assets/mango.webp"
const Hero = () => {
    return (
        <div className="hero">
            <div className=" hero-left">
                    <h2>Best Deals ! Best Prices !</h2>
                  <div className=" hand-hand-icon">
                   <p>new</p>
                      <img src={handicon} alt="" height=" 80px" />
                      </div>
                         <p>collections</p>
                         <p>for everyone</p>
                            </div>
                            <div className=" hero-latest-btn">
                                <div>Latest Collection</div>
                                 <img src={arrowicon} alt="" height="40px"/>
                            </div>
                       <div className=" hero-right">
                        <img src={mango} alt="" height="160px"/>
               </div>
        </div>
    )
}
export default Hero 