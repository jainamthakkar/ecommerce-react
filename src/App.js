import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';
import './App.css';
import Footer from './customer/components/Footer/Footer'

function App() {
  return (
    <div className="">
      <Navigation/>
      
      <div>
        <HomePage/> 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
