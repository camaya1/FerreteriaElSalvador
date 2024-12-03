import { Button, TextField } from "@mui/material";
import { useState } from "react";

const AddProduct = ({ onAddSuccess }: { onAddSuccess: () => void }) => {
  const [productData, setProductData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...productData,
          precio: parseFloat(productData.precio),
          cantidad: parseInt(productData.cantidad),
        }),
      });
      if (!response.ok) throw new Error("Error al guardar el producto");
      alert("Producto guardado con éxito");
      onAddSuccess(); // Actualizar la tabla después de guardar
    } catch (error) {
      console.error(error);
      alert("Error al guardar el producto");
    }
  };

  return (
    <>
      <div className="div-container-add">
        <TextField
          label="Nombre del producto"
          name="nombre"
          value={productData.nombre}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Descripción"
          name="descripcion"
          value={productData.descripcion}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Precio"
          name="precio"
          value={productData.precio}
          onChange={handleInputChange}
          type="number"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cantidad"
          name="cantidad"
          value={productData.cantidad}
          onChange={handleInputChange}
          type="number"
          fullWidth
          margin="normal"
        />
      </div>
      <div className="content-action-button">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Guardar
        </Button>
      </div>
    </>
  );
};

export default AddProduct;
