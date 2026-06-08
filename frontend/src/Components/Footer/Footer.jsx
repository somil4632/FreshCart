import React, { useState } from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/freshcart-logo.png"
const Footer = () => {
  const [menu, setMenu] = useState("home")

    return (
        <div className='footer'>
          <div className="footer-logo">
            <img src={logo} alt="" height="120px"/>
          </div>
  
            <ul className="footer-menu">
              <li onClick={() => setMenu("home")}><Link style={{textDecoration:"none" , color:"#024c02"}} to="/">Home</Link>{menu==="home" ? <hr/>:<></>}</li>
              <li onClick={() => setMenu("dairy products")}><Link style={{textDecoration:"none" , color:"#024c02"}} to="/dairy-products">Dairy Products</Link>{menu==="dairy products" ? <hr/>:<></>}</li>
              <li onClick={() => setMenu("snacks")}><Link style={{textDecoration:"none" , color:"#024c02"}} to="/snacks">Snacks</Link> {menu==="snacks" ? <hr/>:<></>}</li>
              <li onClick={() => setMenu("drinks")}><Link style={{textDecoration:"none" , color:"#024c02"}} to="/drinks">Drinks</Link> {menu==="drinks" ? <hr/>:<></>}</li>
               <li onClick={() => setMenu("vegetables")}><Link style={{textDecoration:"none" , color:"#024c02"}} to="/vegetables">Vegetables</Link> {menu==="vegetables" ? <hr/>:<></>}</li>
            </ul>
          
          
          <div className="footer-copyright">
            <p>MADE WITH LOVE BY SOMIL , AND CHECKOUT THE  <a class="#02360b" href="https://github.com/somil4632/FreshCart">GITHUB REPO</a></p>
             <hr/>
             
             <p>Copyright @ 2026 - ALL Right Reserved </p>
          </div>
        </div>
          
    )
}
export default Footer