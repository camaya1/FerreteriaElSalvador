import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/reports";

// Obtener productos con bajo stock
export const fetchLowStockProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/low-stock`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener productos con bajo stock:", error.response?.data || error.message);
    throw error;
  }
};
