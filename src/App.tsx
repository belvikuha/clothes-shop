
import { BrowserRouter as Router, Route, Routes, useLocation  } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import ProductsList from './components/productsList/ProductsList';
import MainPage from './components/mainPage/MainPage';
import Cart from "./components/cart/Cart";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';



function Appd(){
  let location = useLocation();
  useEffect(() => {
    console.log('location change on' + location.pathname)
  }, [location]);
  return (
    <div className="App">
      <Navbar currentStr={location.pathname}/>
        <div className="content">
          <Routes>
              <Route path='/' element={<MainPage/>}  />   
              <Route path='/catalog' element={<ProductsList/>}  /> 
              <Route path='/cart' element={<Cart/>}  />  
            </Routes>
        </div>
            
        <Footer/>
      </div>
  )
}

function App() {
  
  return (
    <Router>
      
        <Appd/>
      
    </Router>
  );
}

export default App;
