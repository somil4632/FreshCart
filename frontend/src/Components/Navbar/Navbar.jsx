import React, {useState} from 'react';
import "./Navbar.css";
import logo from "../../assets/freshcart-logo.png"
import cart from "../../assets/cart.png"
const Navbar = () => {
    const[menu, setMenu]=useState("home")
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="freshcart logo" width="150px"/>
                <p>From Farm To Your Door</p>
            </div>
            <ul className="nav-menu">
              <li onClick={()=>{setMenu("home")}}>Home{menu==="home" ? <hr/>:<></>}</li>
              <li onClick={()=>{setMenu("grocery")}}>Grocery {menu==="grocery" ? <hr/>:<></>}</li>
              <li onClick={()=>{setMenu("snacks")}}>Snacks {menu==="snacks" ? <hr/>:<></>}</li>
              <li onClick={()=>{setMenu("drinks ")}}>Drinks {menu==="drinks" ? <hr/>:<></>}</li>
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