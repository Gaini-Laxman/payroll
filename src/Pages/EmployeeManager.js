import React, { useState } from "react";
import AddEditEmployee from "./AddEditEmployee";
import EmployeeList from "./EmployeeList";

const EmployeeManager = () => {
  const [employees, setEmployees] = useState([]);

  const saveToLocalStorage = (newEmployees) => {
    setEmployees(newEmployees);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div>
      <AddEditEmployee employees={employees} saveToLocalStorage={saveToLocalStorage} />
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
    </div>
  );
};

export default EmployeeManager;
