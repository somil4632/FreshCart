import React, {createContext, useState} from "react";
import all_products from "../all_products";
export const ShopContext = createContext(null);

 const getDefaultCart = () => {
        let cart = {};
        for(let index=0; index < all_products.length + 1; index++){
            cart[index] = 0;
        }
          return cart;
     }

const ShopContextProvider = (props) => {
 const [cartItems,setCartItems] = useState(getDefaultCart())
         const addToCart = (itemId) => {
       setCartItems((prev) => ({
          ...prev, [itemId]: prev[itemId] + 1
        }));
        console.log(cartItems);
     };
         const removeFromCart = (itemId) => {
       setCartItems((prev) => ({
          ...prev, [itemId]: prev[itemId] - 1
        }));
    };
    
    const getTotalcartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
          if(cartItems[item]>0){
            let itemInfo = all_products.find((product)=>product.id === Number(item));
            if (itemInfo) {
            totalAmount += itemInfo.new_price* cartItems[item];
            }
        }
    }
          return totalAmount;
};
    const getTotalcartItems = () => {
        let totalItems = 0;
        for(const item in cartItems)
        {
          if(cartItems[item]>0){
            totalItems += cartItems[item];
        }
    }
    return totalItems;
};
       const contextValue={getTotalcartItems,getTotalcartAmount,all_products,cartItems,addToCart,removeFromCart};
        console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;