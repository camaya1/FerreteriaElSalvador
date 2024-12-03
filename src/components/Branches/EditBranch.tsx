import { Modal, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const EditBranch = ({
  branch,
  onClose,
  onSave,
}: {
  branch: any;
  onClose: () => void;
  onSave: () => void;
}) => {
  const [branchData, setBranchData] = useState(branch);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBranchData({ ...branchData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/branches/${branch.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(branchData),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la sucursal");
      }

      alert("Sucursal actualizada con éxito");
      onSave();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Modal open={!!branch} onClose={onClose}>
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#fff",
          margin: "100px auto",
          width: "400px",
        }}
      >
        <h2>Editar Sucursal</h2>
        <TextField
          label="Nombre"
          name="nombre"
          value={branchData.nombre}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Dirección"
          name="direccion"
          value={branchData.direccion}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Teléfono"
          name="telefono"
          value={branchData.telefono}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Guardar
        </Button>
      </Box>
    </Modal>
  );
};

export default EditBranch;
