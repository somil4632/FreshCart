import React from 'react';
import "./Navbar.css";
import logo from "../../assets/freshcart logo.png"
import cart from "../../assets/cart.png"
const Navbar = () => {
    return (
        <div class='logo'>
            <div class="text">
                <img src={logo} alt="freshcart logo" height="200px"/>
                <p>From Farm To Your Door</p>
            </div>
            <ul class="Grocery">
              <li>Home</li>
                <li>About Us</li>
                <li>Contact US</li>
                <li>Categories</li>
            </ul>
            <div class="login-cart">
                <button>Login</button>
                <img src={cart} alt="" height="50px" />
            </div>
        </div>
    );
}
export default Navbar;