import { useState } from "react";
import AddEmployee from "../../components/Employees/Add";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/employees");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error al obtener empleados:", error);
    }
  };

  return (
    <div>
      <h1>Gestión de Empleados</h1>
      <AddEmployee onAddSuccess={fetchEmployees} />
    </div>
  );
};

export default Employees;
