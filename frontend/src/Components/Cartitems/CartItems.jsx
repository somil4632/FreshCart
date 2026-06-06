import React, {useContext} from 'react'
import "./CartItems.css"
import removeicon from "../../assets/remove icon.png"
import {ShopContext} from "../../Context/ShopContext";
const CartItems = () => {
    const {getTotalcartAmount,all_products,cartItems,removeFromCart} = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
           {all_products.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return  (
                 <div key={e.id}>
                   <div className="cartitems-format">
                    <img src={e.image} alt="" className='carticon-product-icon' height="100px"/>
                    <p>{e.name}</p>
                    <p>&#8377;{e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <img src={removeicon} alt="" onClick={()=> removeFromCart(e.id)} height="40px"/>
                </div>
                <hr/>
            </div>
                );
            }
             return null;
           })}
        
        <div className="cartitems-down">
           <div className="cartitems-total">
            <h1>Cart Totals </h1>
             <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>&#8377;{getTotalcartAmount()}</p>
                </div>
                <hr/>
                 <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <p>Total</p>
                    <p>&#8377;{getTotalcartAmount()}</p>
                </div>
             </div>
             <button>PROCEED TO CHECKOUT</button>
           </div>
           <div className="cartitems-promocode">
               <p>If you have a promo code, Enter it here</p>
               <div className="cartitems-promobox">
                <input type='text' placeholder='promo code' />
                <button>submit</button>
               </div>
           </div>
        </div>
    </div>
    );
};
export default CartItems