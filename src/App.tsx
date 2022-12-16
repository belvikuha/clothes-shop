import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './components/productsList/ProductsList';
import MainPage from './components/mainPage/MainPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
    <div className="App">
          <Routes>
            <Route path='/' element={<MainPage/>}  />   
            <Route path='/catalog' element={<ProductsList/>}  />   
          </Routes>

    </div>
    </Router>
  );
}

export default App;
