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
  carbs: string,
  protein: string,
  date: string
) {
  return { name, calories, fat, carbs, protein, date };
}

const rows = [
  createData('Proveedor A', "CP001", "2222-2222", "example@gmail.com", "San Salvador", "2021-10-10"),
  createData('Proveedor A', "CP001", "2222-2222", "example@gmail.com", "San Salvador", "2021-10-10"),
  createData('Proveedor A', "CP001", "2222-2222", "example@gmail.com", "San Salvador", "2021-10-10"),
  createData('Proveedor A', "CP001", "2222-2222", "example@gmail.com", "San Salvador", "2021-10-10"),
  createData('Proveedor A', "CP001", "2222-2222", "example@gmail.com", "San Salvador", "2021-10-10"),
  createData('Proveedor A', "CP001", "2222-2222", "example@gmail.com", "San Salvador", "2021-10-10"),
  createData('Proveedor A', "CP001", "2222-2222", "example@gmail.com", "San Salvador", "2021-10-10"),
  createData('Proveedor A', "CP001", "2222-2222", "example@gmail.com", "San Salvador", "2021-10-10"),
];

const TableSupplier = ( ) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre del proveedor</TableCell>
            <TableCell align="right">Codigo</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">Correo electronico</TableCell>
            <TableCell align="right">Direccion</TableCell>
            <TableCell align="right">Fecha</TableCell>
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
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableSupplier;