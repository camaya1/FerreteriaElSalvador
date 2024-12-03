import AddSupplier from "../../components/Supplier/Add";
import TableSupplier from "../../components/Supplier/Table";

import axios from "axios";
import { useState, useEffect } from "react";
import "../../styles/Products.scss"

const Supplier = () => {
    
        const [suppliers, setSuppliers] = useState([]); // Estado para la lista de proveedores
      
        // Función para obtener proveedores desde la API
        const fetchSuppliers = async () => {
          try {
            const response = await axios.get("http://localhost:3000/api/v1/supplier");
            setSuppliers(response.data); // Actualizar estado con los proveedores
          } catch (error) {
            console.error("Error al obtener proveedores:", error);
          }
        };
      
        // Llamar a la función cuando el componente se monte
        useEffect(() => {
          fetchSuppliers();
        }, []);
      
        return (
          <div>
            <h1>Proveedores</h1>
            {/* Pasar la función fetchSuppliers para actualizar la tabla después de guardar */}
            <AddSupplier onAddSuccess={fetchSuppliers} />
            {/* Pasar los proveedores como props */}
            <TableSupplier suppliers={suppliers} />
          </div>
        );
      };
      
      export default Supplier;