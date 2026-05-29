import React, {useState} from 'react';
import "./Navbar.css";
import logo from "../../assets/freshcart-logo.png";
import cart from "../../assets/cart.png";
import {Link} from "react-router-dom";
const Navbar = () => {
    const[menu, setMenu]=useState("home")
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="freshcart logo" width="150px"/>
                <p>From Farm To Your Door</p>
            </div>
            <ul className="nav-menu">
              <li onClick={() => setMenu("home")}><Link style={{textDecoration:"none" , color:"#024c02"}} to="/">Home</Link>{menu==="home" ? <hr/>:<></>}</li>
              <li onClick={() => setMenu("dairy products")}><Link style={{textDecoration:"none" , color:"#024c02"}} to="/dairy products">Dairy Products</Link>{menu==="dairy products" ? <hr/>:<></>}</li>
              <li onClick={() => setMenu("snacks")}><Link style={{textDecoration:"none" , color:"#024c02"}} to="/snacks">Snacks</Link> {menu==="snacks" ? <hr/>:<></>}</li>
              <li onClick={() => setMenu("drinks")}><Link style={{textDecoration:"none" , color:"#024c02"}} to="/drinks">Drinks</Link> {menu==="drinks" ? <hr/>:<></>}</li>
               <li onClick={() => setMenu("vegetables")}><Link style={{textDecoration:"none" , color:"#024c02"}} to="/vegetables">Vegetables</Link> {menu==="vegetables" ? <hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login">
                <button>Login</button>
                </Link>
                <img src={cart} alt="" height="40px" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}
export default Navbar;