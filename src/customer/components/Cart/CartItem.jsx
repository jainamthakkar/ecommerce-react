import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Button, IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  return (
    <div className="mt-5 p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
            alt="pr-img"
          />
        </div>

        <div className="space-y-1 ml-5">
          <h3 className="font-semibold">Men's Pista color stylish Shirt</h3>
          <h5 className="opacity-70">Size: L, Pista</h5>
          <h5 className="opacity-70 mt-2">
            Seller: Being Human by Salman khan
          </h5>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">500/-</p>
            <p className="line-through opacity-50">1000/-</p>
            <p className="font-semibold text-green-600">50% off</p>
          </div>

          <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
              
              <IconButton sx={{color: "RGB(145 85 253)"}}>
                <RemoveCircleOutlineOutlinedIcon />
              </IconButton>

              <span className="py-1 px-7 border rounded-sm"> 1 </span>

                <IconButton sx={{color: "RGB(145 85 253)"}}>
                  <AddCircleOutlineOutlinedIcon />
                </IconButton>
             
            </div>

            <Button sx={{color: "RGB(145 85 253)"}}>Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
