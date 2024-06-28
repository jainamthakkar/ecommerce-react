import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20 mt-8">
      <div className="border p-4 shadow-md">
        <h1 className="font-bold mb-4 text-lg">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={0} />
      </div>

      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-md rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  src="https://www.ethnicplus.in/media/catalog/product/cache/77b9a44d9276879ccdde931a01149182/r/-/r-1.jpg"
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  alt=""
                />

                <div className="space-y-2 ml-5">
                  <p>Lorem ipsum doler sit</p>
                  <p className="space-x-5 font-semibold opacity-60">
                    <span>Color: Pink</span>
                    <span>Size:M</span>
                  </p>
                  <p>Seller: Being Human by Bhaijan</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "1.5rem" }} />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
