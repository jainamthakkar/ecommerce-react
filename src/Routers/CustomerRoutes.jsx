import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/navigation/Navigation";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/checkout/Checkout";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Order from "../customer/components/Order/Order";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
      <Navigation/>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
      </Routes>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default CustomerRoutes;
