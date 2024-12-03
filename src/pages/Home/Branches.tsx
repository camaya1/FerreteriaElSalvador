import { useState } from "react";
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const Branches = () => {
  const [branches, setBranches] = useState([
    { id: 1, nombre: "Sucursal Central", direccion: "Av. Principal #123", telefono: "2222-3333" },
    { id: 2, nombre: "Sucursal Norte", direccion: "Calle Norte #456", telefono: "4444-5555" },
  ]);

  const [newBranch, setNewBranch] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBranch({ ...newBranch, [name]: value });
  };

  const handleAddBranch = () => {
    if (newBranch.nombre && newBranch.direccion && newBranch.telefono) {
      const newId = branches.length ? branches[branches.length - 1].id + 1 : 1;
      setBranches([...branches, { id: newId, ...newBranch }]);
      setNewBranch({ nombre: "", direccion: "", telefono: "" });
      alert("Sucursal agregada con éxito");
    } else {
      alert("Por favor, complete todos los campos");
    }
  };

  const handleEditBranch = (branch: any) => {
    const updatedBranches = branches.map((b) =>
      b.id === branch.id ? { ...b, ...branch } : b
    );
    setBranches(updatedBranches);
    alert("Sucursal actualizada");
  };

  const handleDeleteBranch = (id: number) => {
    const filteredBranches = branches.filter((branch) => branch.id !== id);
    setBranches(filteredBranches);
    alert("Sucursal eliminada");
  };

  return (
    <div>
      <h1>Sucursales</h1>
      {/* Formulario para agregar sucursales */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          label="Nombre"
          name="nombre"
          value={newBranch.nombre}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Dirección"
          name="direccion"
          value={newBranch.direccion}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Teléfono"
          name="telefono"
          value={newBranch.telefono}
          onChange={handleInputChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddBranch}>
          Guardar
        </Button>
      </div>

      {/* Tabla para mostrar sucursales */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {branches.map((branch) => (
              <TableRow key={branch.id}>
                <TableCell>{branch.nombre}</TableCell>
                <TableCell>{branch.direccion}</TableCell>
                <TableCell>{branch.telefono}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditBranch(branch)}
                    style={{ marginRight: "0.5rem" }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteBranch(branch.id)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Branches;
