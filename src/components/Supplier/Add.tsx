import { useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const AddSupplier = ({ onAddSuccess }: { onAddSuccess: () => void }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    nombreContacto: "",
    telefonoContacto: "",
    direccion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/v1/supplier", formData);
      alert("Proveedor guardado exitosamente");
      setFormData({ nombre: "", nombreContacto: "", telefonoContacto: "", direccion: "" }); // Limpiar el formulario
      onAddSuccess(); // Actualizar la tabla llamando a fetchSuppliers
    } catch (error) {
      console.error("Error al guardar el proveedor:", error);
      alert("Hubo un error al guardar el proveedor. Por favor, intenta nuevamente.");
    }
  };

  return (
    <>
      <div className="div-container-add">
        <TextField
          label="Nombre del proveedor"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Nombre del contacto"
          name="nombreContacto"
          value={formData.nombreContacto}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Teléfono"
          name="telefonoContacto"
          value={formData.telefonoContacto}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Dirección"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
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

export default AddSupplier;
