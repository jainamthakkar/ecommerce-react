import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();

  const handleCheckout = () =>{
    navigate("/checkout?step=2")
  }

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>

        <div className="px-5 sticky top-5 h-[100vh] mt-5">
          <div className="border p-4">
            <p className="uppercase font-semibold opacity-60 pb-4">
              Price Details
            </p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price </span>
                <span>789/-</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Discount </span>
                <span className="text-green-600">30% off</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge </span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between pt-3 text-black font-bold mb-10">
                <span>Total Amount </span>
                <span className="text-green-600">489/-</span>
              </div>

              <hr />

              <Button
              onClick={handleCheckout}
                variant="contained"
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
