import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';
import './App.css';
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/checkout/Checkout';

function App() {
  return (
    <div className="">
      <Navigation/>
      
      <div>
        <HomePage/> 
        {/* <Product></Product> */}
        {/* <ProductDetails></ProductDetails> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
