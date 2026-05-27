import React , {createContext} from "react";
import all_products from "../all_products";
export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
    const {all_products} = useContext(ShopContext)
    return (
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
