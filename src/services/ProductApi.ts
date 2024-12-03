import axios from "axios";

// URL base de la API
const API_URL = "http://localhost:3000/api/v1/product";

// Función para obtener todos los productos
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Devuelve la lista de productos
  } catch (error: any) {
    console.error("Error al obtener productos:", error.response?.data || error.message);
    throw error; // Lanza el error para manejarlo en el frontend
  }
};

// Función para reducir stock
export const reduceStock = async (id: number, cantidadVendida: number) => {
  try {
    const response = await axios.put(`${API_URL}/reduce-stock`, {
      id,
      cantidadVendida,
    });
    return response.data; // Devuelve la respuesta del servidor
  } catch (error: any) {
    console.error("Error al reducir el stock:", error.response?.data || error.message);
    throw error; // Lanza el error para manejarlo en el frontend
  }
};

// Función para aumentar stock
export const increaseStock = async (id: number, cantidad: number) => {
  try {
    const response = await axios.put(`${API_URL}/increase-stock`, {
      id,
      cantidad,
    });
    return response.data; // Devuelve la respuesta del servidor
  } catch (error: any) {
    console.error("Error al aumentar el stock:", error.response?.data || error.message);
    throw error; // Lanza el error para manejarlo en el frontend
  }
};

// Función para crear un producto
export const createProduct = async (product: {
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
}) => {
  try {
    const response = await axios.post(API_URL, product);
    return response.data; // Devuelve el producto creado
  } catch (error: any) {
    console.error("Error al crear el producto:", error.response?.data || error.message);
    throw error; // Lanza el error para manejarlo en el frontend
  }
};

// Función para actualizar un producto
export const updateProduct = async (product: {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
}) => {
  try {
    const response = await axios.put(API_URL, product);
    return response.data; // Devuelve el producto actualizado
  } catch (error: any) {
    console.error("Error al actualizar el producto:", error.response?.data || error.message);
    throw error; // Lanza el error para manejarlo en el frontend
  }
};
