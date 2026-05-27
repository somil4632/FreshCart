import React from 'react'
import "./Footer.css"
import logo from "../../assets/freshcart-logo.png"
const Footer = () => {
    return (
        <div className='footer'>
          <div className="footer-logo">
            <img src={logo} alt="" height="120px"/>
          </div>
          <ul className='footer-links'>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
          <div className="footer-copyright">
             <hr/>
             <p>Copyright @ 2026 - ALL Right Reserved </p>
          </div>
        </div>
          
    )
}
export default Footer