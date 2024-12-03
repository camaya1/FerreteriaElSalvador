import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/inventory";

// Obtener inventario
export const fetchInventory = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el inventario:", error.response?.data || error.message);
    throw error;
  }
};

// Actualizar stock
export const updateStock = async (id: number, cantidad: number) => {
  try {
    const response = await axios.put(`${API_URL}/update-stock`, {
      id,
      cantidad,
    });
    return response.data;
  } catch (error: any) {
    console.error("Error al actualizar el stock:", error.response?.data || error.message);
    throw error;
  }
};
