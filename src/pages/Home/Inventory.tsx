import { useState, useEffect } from "react";
import { fetchProducts } from "../../services/ProductApi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

const Inventory = () => {
  const [products, setProducts] = useState([]); // Lista de productos
  const [filteredProducts, setFilteredProducts] = useState([]); // Productos filtrados
  const [search, setSearch] = useState(""); // Campo de búsqueda

  // Cargar los productos al montar el componente
  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data); // Inicialmente, los productos filtrados son todos
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  };

  // Manejar cambios en el campo de búsqueda
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    // Filtrar productos por nombre o descripción
    const filtered = products.filter(
      (product: any) =>
        product.nombre.toLowerCase().includes(value) ||
        product.descripcion.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h1>Inventario</h1>
      <TextField
        label="Buscar producto"
        value={search}
        onChange={handleSearch}
        fullWidth
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Inventario">
          <TableHead>
            <TableRow>
              <TableCell>Nombre del producto</TableCell>
              <TableCell align="right">Descripción</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product: any) => (
              <TableRow key={product.id}>
                <TableCell>{product.nombre}</TableCell>
                <TableCell align="right">{product.descripcion}</TableCell>
                <TableCell align="right">${product.precio}</TableCell>
                <TableCell align="right">{product.cantidad}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Inventory;
