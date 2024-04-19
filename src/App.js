import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';
import './App.css';
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="">
      <Navigation/>
      
      <div>
        {/* <HomePage/>  */}
        {/* <Product></Product> */}
        <ProductDetails></ProductDetails>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
