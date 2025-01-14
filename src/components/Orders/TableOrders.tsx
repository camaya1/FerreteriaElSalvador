import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: string,
  fat: string,
) {
  return { name, calories, fat };
}

const rows = [
  createData('123123123', "2021-10-10", "$80"),
  createData('123123123', "2021-10-10", "$80"),
  createData('123123123', "2021-10-10", "$80"),
  createData('123123123', "2021-10-10", "$80"),
  createData('123123123', "2021-10-10", "$80"),
  createData('123123123', "2021-10-10", "$80"),
  createData('123123123', "2021-10-10", "$80"),
];

const TableOrders = ( ) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id de venta</TableCell>
            <TableCell align="right">Fecha de venta</TableCell>
            <TableCell align="right">Total de compra</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">Ver detalle</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableOrders;