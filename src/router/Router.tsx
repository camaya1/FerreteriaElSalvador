import { Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Home/Products";
import Supplier from "../pages/Home/Supplier";
import Inventory from "../pages/Home/Inventory";
import Reports from "../pages/Home/Reports";
import Employees from "../pages/Home/Employees"; // Importar la página de empleados
import Branches from "../pages/Home/Branches"; // Importar la página de sucursales
import Sales from "../pages/Home/Sales"; // Importar la página de ventas

const Router = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "supplier",
        element: <Supplier />,
      },
      {
        path: "sales", // Ruta para ventas
        element: <Sales />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "branches",
        element: <Branches />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];

export default Router;
