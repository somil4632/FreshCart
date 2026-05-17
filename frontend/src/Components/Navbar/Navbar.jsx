import React from 'react';
import "./Navbar.css";
import logo from "../../assets/freshcart logo.png"
import cart from "../../assets/cart.png"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="freshcart logo" height="80px" width="160px" />
                <p>From Farm To Your Door</p>
            </div>
            <ul className="nav-menu">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact US</li>
              <li>Categories</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart} alt="" height="50px" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}
export default Navbar;