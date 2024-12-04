import { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContextCreate from "../interface/Context"; // Contexto de sesión
import { useNavigate, Outlet } from "react-router-dom";
import logo from "../assets/ferreteria-logo.png"; // Logo de la Ferretería

const Home = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const { setUser } = useContext(ContextCreate); // Obtener `setUser` del contexto

  // Cambiar pestañas
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const routes = [
      "products",
      "supplier",
      "sales",
      "inventory",
      "reports",
      "employees",
      "branches",
    ];
    navigate(`/home/${routes[newValue]}`);
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
      <AppBar position="static" sx={{ backgroundColor: "#2c3e50" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo y título */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img
              src={logo}
              alt="Logo de la Ferretería"
              style={{ width: "50px", height: "50px" }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#ecf0f1" }}
            >
              Ferretería El Salvador
            </Typography>
          </Box>

          {/* Menú horizontal */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            TabIndicatorProps={{
              style: { backgroundColor: "#ecf0f1", height: "3px" },
            }}
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontSize: "1rem",
                color: "#ecf0f1",
              },
              "& .Mui-selected": {
                color: "#ecf0f1",
                fontWeight: "bold",
              },
            }}
          >
            <Tab label="Productos" />
            <Tab label="Proveedores" />
            <Tab label="Ventas" />
            <Tab label="Inventario" />
            <Tab label="Reportes" />
            <Tab label="Empleados" />
            <Tab label="Sucursales" />
          </Tabs>

          {/* Ícono y botón de cerrar sesión */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton>
              <AccountCircleIcon style={{ color: "#ecf0f1", fontSize: "30px" }} />
            </IconButton>
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleLogout}
              sx={{
                padding: "0.5rem 1rem",
                fontSize: "0.9rem",
                borderRadius: "8px",
                textTransform: "none",
                color: "#ecf0f1",
                borderColor: "#ecf0f1",
              }}
            >
              Cerrar Sesión
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Rutas hijas */}
      <Box sx={{ padding: "20px" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Home;
