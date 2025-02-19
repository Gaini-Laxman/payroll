import React from "react";

const EmployeeList = ({ employees, deleteEmployee, editEmployee }) => {
  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees to display</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #ccc" }}>
              <th style={styles.header}>Employee ID</th>
              <th style={styles.header}>Name</th>
              <th style={styles.header}>Email</th>
              <th style={styles.header}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td style={styles.cell}>{employee.empId}</td>
                <td style={styles.cell}>{employee.name}</td>
                <td style={styles.cell}>{employee.email}</td>
                <td style={styles.cell}>
                  <button style={styles.editButton} onClick={() => editEmployee(employee)}>
                    Edit
                  </button>
                  <button style={styles.deleteButton} onClick={() => deleteEmployee(employee.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  header: {
    textAlign: "left",
    padding: "10px",
    fontWeight: "bold",
  },
  cell: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default EmployeeList;
