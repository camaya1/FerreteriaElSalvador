import { useState, useEffect } from "react";
import { fetchProducts, reduceStock, increaseStock, updateProduct } from "../../services/ProductApi";
import AddProduct from "../../components/Products/Add";
import TableProducts from "../../components/Products/Table";
import EditProduct from "../../components/Products/EditProduct"; // Importa el componente de edición

const Products = () => {
  const [products, setProducts] = useState([]); // Estado para productos
  const [selectedProduct, setSelectedProduct] = useState<any>(null); // Estado para el producto a editar

  // Obtener productos al cargar el componente
  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  };

  // Reducir stock desde un botón
  const handleReduceStock = async (id: number, cantidad: number) => {
    try {
      await reduceStock(id, cantidad);
      loadProducts(); // Actualizar la lista de productos
    } catch (error) {
      alert("Error al reducir el stock");
    }
  };

  // Aumentar stock desde un botón
  const handleIncreaseStock = async (id: number, cantidad: number) => {
    try {
      await increaseStock(id, cantidad);
      loadProducts(); // Actualizar la lista de productos
    } catch (error) {
      alert("Error al aumentar el stock");
    }
  };

  // Manejar apertura del modal de edición
  const handleEditProduct = (product: any) => {
    setSelectedProduct(product); // Selecciona el producto a editar
  };

  // Guardar cambios del producto editado
  const handleSaveProduct = async (updatedProduct: any) => {
    try {
      await updateProduct(updatedProduct); // Llama a la API para actualizar
      alert("Producto actualizado con éxito");
      loadProducts(); // Refresca la lista de productos
      setSelectedProduct(null); // Cierra el modal
    } catch (error) {
      alert("Error al actualizar el producto");
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <AddProduct onAddSuccess={loadProducts} />
      <TableProducts
        products={products}
        onReduceStock={handleReduceStock}
        onIncreaseStock={handleIncreaseStock}
        onEditProduct={handleEditProduct} // Pasar función para editar
      />
      {selectedProduct && (
        <EditProduct
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)} // Cerrar modal
          onSave={handleSaveProduct} // Guardar cambios
        />
      )}
    </div>
  );
};

export default Products;
