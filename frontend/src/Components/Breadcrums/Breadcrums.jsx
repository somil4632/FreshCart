import React from 'react'
import "./Breadcrums.css";
import arrowicon from "../../assets/arrow icon.webp"
const Breadcrums = (props) => {
    const {product} = props;
    return (
        <div className='breadcrums'>
      Home <img src={arrowicon} alt=" " height="10px"/>
      Shop <img src={arrowicon} alt="" height="10px"/>
      {product.category} <img src={arrowicon} alt="" height="10px"/>
    {product.name} 
        </div>
    )
}
export default Breadcrums