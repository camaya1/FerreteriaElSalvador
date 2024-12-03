import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const salesData = [
  { id: 1, product: "Cemento", quantity: 10, total: "$50", date: "2024-01-01" },
  { id: 2, product: "Ladrillos", quantity: 25, total: "$100", date: "2024-01-02" },
  { id: 3, product: "Pintura", quantity: 5, total: "$30", date: "2024-01-03" },
  { id: 4, product: "Carretilla", quantity: 2, total: "$150", date: "2024-01-04" },
];

const Sales = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Panel de Ventas
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID Venta</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salesData.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell>{sale.id}</TableCell>
                <TableCell>{sale.product}</TableCell>
                <TableCell>{sale.quantity}</TableCell>
                <TableCell>{sale.total}</TableCell>
                <TableCell>{sale.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Sales;
