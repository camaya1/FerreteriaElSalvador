import { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

const AddBranch = ({ onAddSuccess }: { onAddSuccess: () => void }) => {
  const [branchData, setBranchData] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBranchData({ ...branchData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/branches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(branchData),
      });

      if (!response.ok) {
        throw new Error("Error al agregar la sucursal");
      }

      alert("Sucursal agregada con éxito");
      setBranchData({ nombre: "", direccion: "", telefono: "" });
      onAddSuccess();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <TextField
        label="Nombre"
        name="nombre"
        value={branchData.nombre}
        onChange={handleInputChange}
        sx={{ marginRight: "1rem" }}
      />
      <TextField
        label="Dirección"
        name="direccion"
        value={branchData.direccion}
        onChange={handleInputChange}
        sx={{ marginRight: "1rem" }}
      />
      <TextField
        label="Teléfono"
        name="telefono"
        value={branchData.telefono}
        onChange={handleInputChange}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ marginLeft: "1rem" }}>
        Guardar
      </Button>
    </Box>
  );
};

export default AddBranch;
