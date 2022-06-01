import Header from './components/header/header.js'
import Categories from './components/categories/categories.js'
import Products from './components/products/details.js'
import Footer from './components/footer/footer.js'
import Cart from './components/cart/cart.js'
import {
  BrowserRouter as Router,
  
  Route,Routes
} from "react-router-dom";

import ViewDetails from './components/view/view.js'
function App() {
  return (
    <div className="App">

      <Router>

      <Header />

            <Routes>
           <Route exact path="/"  element={
              <>
                 <Categories />
                 <Products />
              </>
            }></Route>
      
       
               
       <Route exact path="/cart" element={<Cart/>}></Route>
       
       <Route exact path="/product" element={<ViewDetails/>}></Route>
             </Routes>


       <Footer />


      </Router>
 
    </div>
  );
}

export default App;