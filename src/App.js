import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Products from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import SingleProduct from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import Default from './pages/Default';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidecart from './components/SideCart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <h1 className="text-title">Shree Swami Samartha</h1>
        <Navbar />
        <Sidebar />
        <Sidecart />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/cart" component={CartPage} />
          <Route component={Default} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
