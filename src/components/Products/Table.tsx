import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

interface TableProductsProps {
  products: any[];
  onReduceStock: (id: number, cantidad: number) => void;
  onIncreaseStock: (id: number, cantidad: number) => void;
  onEditProduct: (product: any) => void;
}

const TableProducts = ({
  products,
  onReduceStock,
  onIncreaseStock,
  onEditProduct,
}: TableProductsProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre del producto</TableCell>
            <TableCell align="right">Descripción</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.nombre}</TableCell>
              <TableCell align="right">{product.descripcion}</TableCell>
              <TableCell align="right">${product.precio}</TableCell>
              <TableCell align="right">{product.cantidad}</TableCell>
              <TableCell align="right">
                <Button onClick={() => onIncreaseStock(product.id, 1)}>+</Button>
                <Button onClick={() => onReduceStock(product.id, 1)}>-</Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => onEditProduct(product)}
                >
                  Editar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableProducts;
