import React from "react";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/navigation/Navigation";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/checkout/Checkout";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Order from "../customer/components/Order/Order";
import LoginForm from "../customer/auth/LoginForm";
import Register from "../customer/auth/Register";

const CustomerRoutes = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRoutes;
