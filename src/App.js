import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayrollSystem from "./Pages/PayrollSystem";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/payroll" element={<PayrollSystem />} />
      </Routes>
    </Router>
  );
}

export default App;
