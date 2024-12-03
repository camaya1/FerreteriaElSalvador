import { useState, useEffect } from "react";
import { fetchLowStockProducts } from "../../services/ReportApi";
import TableLowStock from "../../components/Reports/TableLowStock";

const Reports = () => {
  const [lowStockProducts, setLowStockProducts] = useState([]);

  // Cargar productos con bajo stock
  const loadLowStockProducts = async () => {
    try {
      const data = await fetchLowStockProducts();
      setLowStockProducts(data);
    } catch (error) {
      console.error("Error al cargar productos con bajo stock:", error);
    }
  };

  useEffect(() => {
    loadLowStockProducts();
  }, []);

  return (
    <div>
      <h1>Reportes</h1>
      <h2>Productos con Bajo Stock</h2>
      <TableLowStock products={lowStockProducts} />
    </div>
  );
};

export default Reports;
