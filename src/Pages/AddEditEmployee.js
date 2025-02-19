import React, { useState, useEffect } from "react";

const AddEditEmployee = ({ employees, saveToLocalStorage, employeeToEdit, setEmployeeToEdit }) => {
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    empId: "",
    email: "",
    baseSalary: "",
    allowances: "",
    deductions: "",
  });

  // Populate the form when editing an employee
  useEffect(() => {
    if (employeeToEdit) {
      setNewEmployee(employeeToEdit);
    }
  }, [employeeToEdit]);

  // Handle input changes
  const handleChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  // Add or update employee
  const handleSaveEmployee = () => {
    if (!newEmployee.name || !newEmployee.baseSalary) {
      alert("Please enter all required fields.");
      return;
    }

    if (employeeToEdit) {
      // Update the employee
      const updatedEmployees = employees.map((emp) =>
        emp.id === employeeToEdit.id ? newEmployee : emp
      );
      saveToLocalStorage(updatedEmployees);
      setEmployeeToEdit(null); // Clear the edit state
    } else {
      // Add new employee
      const newEmp = {
        ...newEmployee,
        id: Date.now(),
        baseSalary: parseFloat(newEmployee.baseSalary),
        allowances: parseFloat(newEmployee.allowances || 0),
        deductions: parseFloat(newEmployee.deductions || 0),
      };
      saveToLocalStorage([...employees, newEmp]);
    }

    // Clear the form
    setNewEmployee({
      name: "",
      empId: "",
      email: "",
      baseSalary: "",
      allowances: "",
      deductions: "",
    });
  };

  return (
    <div>
      <h2>{employeeToEdit ? "Edit Employee" : "Add New Employee"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newEmployee.name}
        onChange={handleChange}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="text"
        name="empId"
        placeholder="Employee ID"
        value={newEmployee.empId}
        onChange={handleChange}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newEmployee.email}
        onChange={handleChange}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        name="baseSalary"
        placeholder="Base Salary"
        value={newEmployee.baseSalary}
        onChange={handleChange}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        name="allowances"
        placeholder="Allowances"
        value={newEmployee.allowances}
        onChange={handleChange}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        name="deductions"
        placeholder="Deductions"
        value={newEmployee.deductions}
        onChange={handleChange}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleSaveEmployee}
      >
        {employeeToEdit ? "Update Employee" : "Add Employee"}
      </button>
    </div>
    
  );
};

export default AddEditEmployee;
