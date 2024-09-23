import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
    const [value, setValue] = useState('products');
    const navigate = useNavigate();

    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
         setValue(newValue);
        navigate(newValue);
    };

    return (
        <>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}>
                        <Tab label="Registro de productos" value="products" />
                        <Tab label="Gestion de proveedores" value="supplier" />
                        <Tab label="Registro de ventas" value="orders" />
                        <Tab label="Consulta de inventario" value="inventory" />
                        <Tab label="Reportes" value="reports" />
                        <Tab label="Registro de cliente" value="clients" />
                    </TabList>
                </Box>
                {/* <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel> */}
                <Outlet />
            </TabContext>
        </>
    )
}

export default Home