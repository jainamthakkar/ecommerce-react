import AdjustIcon from "@mui/icons-material/Adjust";
import { Grid } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <div className="p-5 shadow-md hover:shadow-lg border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              src="https://www.ethnicplus.in/media/catalog/product/cache/77b9a44d9276879ccdde931a01149182/r/-/r-1.jpg"
              alt=""
              className="w-[5rem] h-[5rem] object-cover object-top"
            />
            <div className="ml-5 space-y-2">
              <p>Western Dress</p>
              <p className="opacity-60 text-xs font-semibold">Size: M</p>
              <p className="opacity-60 text-xs font-semibold">Color: Maroon</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>1099/-</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm "
                />
                <span>Delivered On march 03</span>
              </p>
              <p className="text-xs">Your Item has been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on 03 March</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
