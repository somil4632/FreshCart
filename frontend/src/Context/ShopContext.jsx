import React, {createContext, useState, useEffect} from "react";
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
 const [cartItems,setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : getDefaultCart();
 });

 const [user , setUser] = useState(() => {
    const saved =  localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
 });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  },[cartItems]);
  

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
    const signup = (name, email, password) => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const exists = users.find((u) => u.email === email);
        if (exists) return {success: false, message: "Email already registered"};
        const newUser = {name, email , password} ;
        users.push(newUser);
        localStorage.setItem("users" , JSON.stringify(users));
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        return {success: true};
    };
    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const found = users.find((u) => u.email === email && u.password === password);
        if (!found) return {success: false , message : "Invalid email or password"};
        setUser(found);
        localStorage.setItem("user" , JSON.stringify(found));
        return {success: true};
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
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
       const contextValue={getTotalcartItems,getTotalcartAmount,all_products,cartItems,addToCart,removeFromCart, user,login,signup,logout};
        console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;