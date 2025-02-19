import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import EmployeeList from "./EmployeeList";
import AddEditEmployee from "./AddEditEmployee";
import PayrollSummary from "./PayrollSummary";

const PayrollSystem = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeToEdit, setEmployeeToEdit] = useState(null); // For edit functionality
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const saveToLocalStorage = (updatedEmployees) => {
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
  };

  const editEmployee = (employee) => {
    setEmployeeToEdit(employee); // Set employee to edit
  };

  return (
    <div>
      <Header />
      <AddEditEmployee
        employees={employees}
        saveToLocalStorage={saveToLocalStorage}
        employeeToEdit={employeeToEdit}
        setEmployeeToEdit={setEmployeeToEdit} // Clear edit state after saving
      />
      <EmployeeList
        employees={employees}
        editEmployee={editEmployee}
        deleteEmployee={(id) => saveToLocalStorage(employees.filter(emp => emp.id !== id))}
      />
      <PayrollSummary employees={employees} />
    </div>
  );
};

export default PayrollSystem;
