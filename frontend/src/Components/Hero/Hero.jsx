import React from 'react'
import "./Hero.css"
import handicon from "../../assets/hand-icon.png"
import arrowicon from "../../assets/arrow icon.webp"
import groceryitems from "../../assets/grocery items.png"
const Hero = () => {
    return (
        <div className="hero">
            <div className=" hero-left">
                    <h2>Best Deals ! Best Prices !</h2>
                  <div className=" hero-hand-icon">
                   <p>new</p>
                      <img src={handicon} alt="" height="70px" />
                      </div>
                         <p>collections</p>
                         <p>for everyone</p>
                           <div className=" hero-latest-btn">
                                <div>Latest Collection</div>
                                 <img src={arrowicon} alt="" height="40px"/>
                            </div>
                            </div>
                          
                       <div className=" hero-right">
                        <img src={groceryitems} alt="" height="300px"/>
               </div>
        </div>
    )
}
export default Hero 