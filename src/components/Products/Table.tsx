import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: string,
  carbs: number,
  protein: string,
  date: string
) {
  return { name, calories, fat, carbs, protein, date };
}

const rows = [
  createData('Frozen yoghurt', 159, "A", 24, "Proveedor A", "2021-10-10"),
  createData('Ice cream sandwich', 237, "A", 37, "Proveedor A", "2021-10-10"),
  createData('Eclair', 262, "A", 24, "Proveedor A", "2021-10-10"),
  createData('Cupcake', 305, "A", 67, "Proveedor A", "2021-10-10"),
  createData('Gingerbread', 356, "A", 49, "Proveedor A", "2021-10-10"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre del producto</TableCell>
            <TableCell align="right">Codigo</TableCell>
            <TableCell align="right">Categoria</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Proveedor</TableCell>
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