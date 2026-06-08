import React from 'react'
import "./Offers.css"
import Monster from "../../assets/Monster.png"
const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLER PRODUCTS</p>
            </div>
            <div className="offers-right">
               <img src={Monster} alt=""/>
            </div>
        </div>
    )
}
export default Offers