import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <div>
      <Grid className="bg-black text-white text-center mt-10 pt-10" container>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5 block" variant="h6" gutterBottom>
              Blog
            </Button>{" "}
          </div>
          <div>
            {" "}
            <Button className="pb-5 block" variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5 block" variant="h6" gutterBottom>
              Analysis
            </Button>{" "}
          </div>
          <div>
            {" "}
            <Button className="pb-5 block" variant="h6" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBottom>
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Guide
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5 block" variant="h6" gutterBottom>
              API Status
            </Button>{" "}
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>

          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5 block" variant="h6" gutterBottom>
              Privacy
            </Button>{" "}
          </div>
          <div>
            {" "}
            <Button className="pb-5 block" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20 pb-10" item xs={12}>

            <Typography variant="body2" component='p' align="center">
                &copy; 2024 ShopWithSpring. All Rights Reserved.
            </Typography>

            <Typography variant="body2" component='p' align="center">
                Made with HardWork by me.
            </Typography>


        </Grid>


      </Grid>
    </div>
  );
};

export default Footer;
