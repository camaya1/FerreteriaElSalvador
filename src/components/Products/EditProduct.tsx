import { Modal, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const EditProduct = ({
  product,
  onClose,
  onSave,
}: {
  product: any;
  onClose: () => void;
  onSave: (updatedProduct: any) => void;
}) => {
  const [productData, setProductData] = useState(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(productData); // Llama a la función `onSave` con los datos editados
    onClose(); // Cierra el modal
  };

  return (
    <Modal open={!!product} onClose={onClose}>
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#fff",
          margin: "100px auto",
          width: "400px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h2>Editar Producto</h2>
        <TextField
          label="Nombre"
          name="nombre"
          value={productData.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Descripción"
          name="descripcion"
          value={productData.descripcion}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Precio"
          name="precio"
          value={productData.precio}
          onChange={handleChange}
          type="number"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cantidad"
          name="cantidad"
          value={productData.cantidad}
          onChange={handleChange}
          type="number"
          fullWidth
          margin="normal"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Guardar
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditProduct;
