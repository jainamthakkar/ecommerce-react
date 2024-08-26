import React, { useState } from 'react'
import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log("userData:" + userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <TextField
              required
              name="email"
              id="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              name="password"
              id="password"
              label="Password"
              fullWidth
              type="password"
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0rem", bgcolor: "#9155FD" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>Don't have an account? </p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5"
            size="small"
          >
            Register
          </Button>
        </div>
      </div>
      </div>
  )
}

export default LoginForm