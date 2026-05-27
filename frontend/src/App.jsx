import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer"
import dairybanner from "./assets/dairy.png"
import vegetable from "./assets/vegetables.png"
import snacks from "./assets/snacks.png"
import drinks from "./assets/drinks.png"
function App() {
   

  return (
      
        <BrowserRouter>
         <div>
           <Navbar/>
           <Routes>
            <Route path="/" element={<Shop/>}/>
              <Route path="/grocery" element={<ShopCategory banner={dairybanner} category="grocery"/>}/>
                <Route path="/snacks" element={<ShopCategory banner={snacks}   category="snacks" />}/>
                  <Route path="/drinks" element={<ShopCategory  banner={drinks}  category="drinks" />}/>
                      <Route path="/categories" element={<ShopCategory banner={vegetable}  category="categories"/>}/>
                      <Route  path="/product" element={<Product />}/>
                      <Route path="/product/:productid" element={<Product />}/>
                      <Route path="/cart" element={<Cart />}/>
                      <Route path="/login" element={<LoginSignup />}/>
           </Routes>
           <Footer/>
              </div>
        </BrowserRouter>
   
    
  );
}

export default App;
