import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PayrollSummary = ({ employees }) => {
  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Name", "Base Salary", "Allowances", "Deductions", "Net Salary"];
    const tableRows = employees.map((employee) => [
      employee.name,
      `$${employee.baseSalary.toFixed(2)}`,
      `$${employee.allowances.toFixed(2)}`,
      `$${employee.deductions.toFixed(2)}`,
      `$${(employee.baseSalary + employee.allowances - employee.deductions).toFixed(2)}`,
    ]);

    doc.text("Payroll Summary Report", 14, 15);
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });
    doc.save("payroll-summary.pdf");
  };

  return (
    <div>
      <h2>Payroll Summary</h2>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={exportToPDF}
      >
        Export to PDF
      </button>
    </div>
  );
};

export default PayrollSummary;
