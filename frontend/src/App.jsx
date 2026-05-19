import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
function App() {
   

  return (
      
        <BrowserRouter>
         <div>
           <Navbar/>
           <Routes>
            <Route path="/" element={<Shop/>}/>
              <Route path="/grocery" element={<ShopCategory  category="grocery"/>}/>
                <Route path="/snacks" element={<ShopCategory    category="snacks" />}/>
                  <Route path="/drinks" element={<ShopCategory   category="drinks" />}/>
                      <Route path="/categories" element={<ShopCategory   category="categories"/>}/>
                      <Route  path="/product" element={<Product />}/>
                      <Route path="/product/:productid" element={<Product />}/>
                      <Route path="/cart" element={<Cart />}/>
                      <Route path="/login" element={<LoginSignup />}/>
           </Routes>
              </div>
        </BrowserRouter>
   
    
  );
}

export default App;
