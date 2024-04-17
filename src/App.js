import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';
import './App.css';
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div className="">
      <Navigation/>
      
      <div>
        {/* <HomePage/>  */}
        <Product></Product>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
