import React from 'react'
import "./Breadcrums.css";
import arrowicon from "../../assets/arrow icon.webp"
const Breadcrums = (props) => {
    return (
        <div className='breadcrums'>
      Home <img src={arrowicon} alt=" " height="30px"/>
      Shop <img src={arrowicon} alt="" height="30px"/>
      {props.product.category} <img src={arrowicon} alt="" height="30px"/>
    {props.product.name} 
        </div>
    )
}
export default Breadcrums