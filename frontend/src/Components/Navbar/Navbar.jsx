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
              <li onClick={() => setMenu("home")}><Link to="/">Home</Link>{menu==="home" ? <hr/>:<></>}</li>
              <li onClick={() => setMenu("grocery")}><Link to="grocery">Grocery</Link>{menu==="grocery" ? <hr/>:<></>}</li>
              <li onClick={() => setMenu("snacks")}><Link to="/snacks">Snacks</Link> {menu==="snacks" ? <hr/>:<></>}</li>
              <li onClick={() => setMenu("drinks")}><Link to="/drinks">Drinks</Link> {menu==="drinks" ? <hr/>:<></>}</li>
               <li onClick={() => setMenu("categories")}><Link to="/categories">categories</Link> {menu==="categories" ? <hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart} alt="" height="40px" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}
export default Navbar;