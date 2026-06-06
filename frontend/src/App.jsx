import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer"
import dairybanner from "./assets/dairy product banner.png"
import vegetable from "./assets/vegetable banner.png"
import snacks from "./assets/Snakes Banner.png"
import drinks from "./assets/Drinks Store Banner.png"
function App() {
   

  return (
      
        <BrowserRouter>
         <div>
           <Navbar/>
           <Routes>
            <Route path="/" element={<Shop/>}/>
             <Route path="/dairy-products"element={<ShopCategory banner={dairybanner} category="dairy products"/>}/>
                <Route path="/snacks" element={<ShopCategory banner={snacks}   category="snack" />}/>
                  <Route path="/drinks" element={<ShopCategory  banner={drinks}  category="drink" />}/>
                      <Route path="/vegetables" element={<ShopCategory banner={vegetable}  category="vegetables"/>}/>
                      <Route  path="/product" element={<Product />}/>
                      <Route path="/product/:productId" element={<Product />}/>
                      <Route path="/cart" element={<Cart />}/>
                      <Route path="/login" element={<LoginSignup />}/>
           </Routes>
           <Footer/>
              </div>
        </BrowserRouter>
   
    
  );
}

export default App;
