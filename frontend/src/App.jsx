import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter} from "react-router-dom"
function App() {
   

  return (
       <div>
        <BrowserRouter>
           <Navbar/>
           <Routes>
            <Route path="/" element={<Shop/>}/>
              <Route path="/Grocery " element={<Shop/>}/>
                <Route path="/" element={<Shop/>}/>
                  <Route path="/" element={<Shop/>}/>
           </Routes>
        </BrowserRouter>
   
       </div>
  );
}

export default App;
