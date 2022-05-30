import Header from './components/header/header.js'
import Categories from './components/categories/categories.js'
import Products from './components/products/details.js'
import Footer from './components/footer/footer.js'
function App() {
  return (
    <div className="App">
      <Header />
       <Categories />
       <Products />
       <Footer />
    </div>
  );
}

export default App;