import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";
import ContextCreate from "../interface/Context"; // Contexto de sesión
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Ícono de usuario
import logo from "../assets/ferreteria-logo.png"; // Logo de la Ferretería

const Home = () => {
  const [value, setValue] = useState("products");
  const navigate = useNavigate();
  const { user, setUser } = useContext(ContextCreate); // Obtener `user` del contexto

  // Manejar el cambio de pestañas
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  // Manejar cierre de sesión
  const handleLogout = () => {
    setUser({
      token: "",
      user: {
        name: "",
        email: "",
        rolId: 0,
      },
    });
    navigate("/login");
  };

  return (
    <>
      <TabContext value={value}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: 1,
            borderColor: "divider",
            padding: "10px",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img
              src={logo}
              alt="Logo de la Ferretería"
              style={{ width: "40px", height: "40px" }} // Tamaño reducido
            />
            <h1 style={{ margin: 0, fontSize: "1.2rem" }}>Ferretería El Salvador</h1>
          </Box>

          {/* Menú de pestañas */}
          <TabList onChange={handleChange}>
            <Tab label="Registro de productos" value="products" />
            <Tab label="Gestión de proveedores" value="supplier" />
            <Tab label="Panel de ventas" value="sales" /> {/* Cambiado a 'sales' */}
            <Tab label="Consulta de inventario" value="inventory" />
            <Tab label="Reportes" value="reports" />
            <Tab label="Registrar empleados" value="employees" />
            <Tab label="Sucursales" value="branches" />
          </TabList>

          {/* Ícono de usuario y botón de cerrar sesión */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <AccountCircleIcon style={{ color: "gray", fontSize: "30px" }} />
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleLogout}
              sx={{
                padding: "0.5rem 1rem",
                fontSize: "0.9rem",
                borderRadius: "8px",
                textTransform: "none",
              }}
            >
              Cerrar Sesión
            </Button>
          </Box>
        </Box>
        <Outlet />
      </TabContext>
    </>
  );
};

export default Home;
