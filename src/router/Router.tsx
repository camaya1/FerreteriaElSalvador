import { Navigate } from "react-router-dom"

import Login from "../pages/Login"
import Home from "../pages/Home"
import Products from "../pages/Home/Products"
import Supplier from "../pages/Home/Supplier"
import Orders from "../pages/Home/Orders"
import Inventory from "../pages/Home/Inventory"
import Reports from "../pages/Home/Reports"
import Clients from "../pages/Home/clients"

const Router = [
    {
        path: "login",
        element: <Login/>,
    }, {
        path: "home",
        element: <Home/>,
        children: [
            {
                path: "products",
                element:<Products/>,
            },{
                path: "supplier",
                element: <Supplier/>,
            },{
                path: "orders",
                element: <Orders/>,
            },{
                path: "inventory",
                element: <Inventory/>,
            },{
                path: "reports",
                element: <Reports/>,
            },{
                path: "clients",
                element: <Clients/>,
            }
        ]
    }, {
        path: "*",
        element: <Navigate to="/login"/>,
    }
]

export default Router