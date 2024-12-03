import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableSupplier = ({ suppliers }: { suppliers: any[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre del proveedor</TableCell>
            <TableCell align="right">Nombre del contacto</TableCell>
            <TableCell align="right">Teléfono</TableCell>
            <TableCell align="right">Dirección</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {suppliers.map((supplier) => (
            <TableRow key={supplier.id}>
              <TableCell>{supplier.nombre}</TableCell>
              <TableCell align="right">{supplier.nombreContacto}</TableCell>
              <TableCell align="right">{supplier.telefonoContacto}</TableCell>
              <TableCell align="right">{supplier.direccion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableSupplier;
