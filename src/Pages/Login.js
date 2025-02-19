import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Container, Paper } from "@mui/material";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (credentials.username === "admin" && credentials.password === "admin123@") {
      localStorage.setItem("isAuthenticated", "true"); // Set authentication flag
      navigate("/payroll"); // Redirect to the payroll system
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container
      maxWidth="xs"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={3} style={{ padding: "30px", width: "100%" }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Admin Login
        </Typography>
        <TextField
          label="Username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
          style={{
            marginTop: "20px",
            padding: "10px 0",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
