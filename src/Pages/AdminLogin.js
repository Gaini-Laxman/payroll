import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded admin credentials for simplicity
    if (username === "admin" && password === "admin123") {
      navigate("/payroll");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box sx={{ width: "300px", margin: "100px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <Typography variant="h5" sx={{ marginBottom: "16px" }}>
        Admin Login
      </Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth sx={{ marginTop: "16px" }}>
        Login
      </Button>
    </Box>
  );
};

export default AdminLogin;
