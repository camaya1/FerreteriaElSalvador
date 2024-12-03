import { Button, TextField, Grid, Box } from "@mui/material";
import { useState } from "react";

const AddEmployee = ({ onAddSuccess }: { onAddSuccess: () => void }) => {
  const [employeeData, setEmployeeData] = useState({
    nombres: "",
    apellidos: "",
    direccion: "",
    fechaNacimiento: "",
    genero: "",
    telefono: "",
    correo: "",
    fechaContratacion: "",
    puestoFuncional: "",
    salario: "",
    clave: "",
    confirmarClave: "",
    departamento_id: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async () => {
    // Verificar que las contraseñas coincidan
    if (employeeData.clave !== employeeData.confirmarClave) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/v1/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employeeData),
      });

      if (!response.ok) {
        throw new Error("Error al guardar el empleado");
      }

      alert("Empleado guardado con éxito");
      setEmployeeData({
        nombres: "",
        apellidos: "",
        direccion: "",
        fechaNacimiento: "",
        genero: "",
        telefono: "",
        correo: "",
        fechaContratacion: "",
        puestoFuncional: "",
        salario: "",
        clave: "",
        confirmarClave: "",
        departamento_id: "",
      });
      onAddSuccess();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "1rem",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>Registrar Empleado</h2>
      <Grid container spacing={2}>
        {/* Primera fila */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nombres"
            name="nombres"
            value={employeeData.nombres}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Apellidos"
            name="apellidos"
            value={employeeData.apellidos}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        {/* Segunda fila */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Dirección"
            name="direccion"
            value={employeeData.direccion}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Fecha de Nacimiento"
            name="fechaNacimiento"
            type="date"
            value={employeeData.fechaNacimiento}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        {/* Tercera fila */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Género"
            name="genero"
            value={employeeData.genero}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Teléfono"
            name="telefono"
            value={employeeData.telefono}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        {/* Cuarta fila */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Correo"
            name="correo"
            type="email"
            value={employeeData.correo}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Fecha de Contratación"
            name="fechaContratacion"
            type="date"
            value={employeeData.fechaContratacion}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        {/* Quinta fila */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Puesto Funcional"
            name="puestoFuncional"
            value={employeeData.puestoFuncional}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Salario"
            name="salario"
            type="number"
            value={employeeData.salario}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        {/* Sexta fila */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Clave"
            name="clave"
            type="password"
            value={employeeData.clave}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Confirmar Clave"
            name="confirmarClave"
            type="password"
            value={employeeData.confirmarClave}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        {/* Séptima fila */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Departamento ID"
            name="departamento_id"
            type="number"
            value={employeeData.departamento_id}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
      </Grid>

      {/* Botón guardar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1rem",
        }}
      >
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

export default AddEmployee;
