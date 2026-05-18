import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
function App() {
   

  return (
      
        <BrowserRouter>
         <div>
           <Navbar/>
           <Routes>
            <Route path="/" element={<Shop/>}/>
              <Route path="/grocery" element={<ShopCategory />}/>
                <Route path="/snacks" element={<ShopCategory />}/>
                  <Route path="/drinks" element={<ShopCategory />}/>
                      <Route path="/categories" element={<ShopCategory />}/>
           </Routes>
              </div>
        </BrowserRouter>
   
    
  );
}

export default App;
