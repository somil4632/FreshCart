import React from 'react'
import "./Hero.css"
import handicon from "../../assets/hand-icon.png"
import arrowicon from "../../assets/arrow icon.webp"
import groceryitems from "../../assets/grocery items.png"
import { Link } from "react-router-dom";
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
                           <Link to ="/newcollection" className=" hero-latest-btn">
                                <div>Latest Collection</div>
                                 <img src={arrowicon} alt="" height="40px"/>
                            </Link>
                            </div>
                          
                       <div className=" hero-right">
                        <img src={groceryitems} alt="" height="300px"/>
               </div>
        </div>
    )
}
export default Hero 