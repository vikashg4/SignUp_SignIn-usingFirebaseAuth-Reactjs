import { Box, Button, Typography, TextField } from "@mui/material";
import React, { useState } from "react";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with email and password
    setIsLoggedIn(true);
  };

  const validateEmail = (email) => {
    // const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const emailRegex = /^\w+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;':",./<>?])[a-zA-Z\d!@#$%^&*()_+\-=[\]{}|;':",./<>?]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    return validateEmail(email) && validatePassword(password);
  };

  if (isLoggedIn) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(to right bottom, #01c9f1, #00b9ee, #009ee7, #0084df, #006cd7)",
        }}
      >
        <Box
          sx={{            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            background: "#fff",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <Typography variant="h5" gutterBottom>
           <i> <b>Welcome to your profile</b> </i>
            <p className="fnt">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis omnis facere saepe. Reiciendis, vel impedit!
            </p>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right bottom, #01c9f1, #00b9ee, #009ee7, #0084df, #006cd7)",
      }}
    >
      <Box
sx={{
          background: "#fff",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      > <i><b>Sign In</b></i>
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!validatePassword(password)}
            helperText="Password must contain at least 8 characters, including uppercase, lowercase, and numbers"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!validateForm()}
            fullWidth
          >
            Login
          </Button>
        </form>
      </Box>
      {isLoggedIn && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            background: "#fff",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <Typography variant="h5" gutterBottom>
            {message}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default LoginPage;

