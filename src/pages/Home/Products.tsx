import AddProduct from "../../components/Products/Add";
import BasicTable from "../../components/Products/Table";
import "../../styles/Products.scss"
const Products = () => {
    return (
        <div>
            <h1>Products</h1>
            <AddProduct />
            <BasicTable />
        </div>
    );
}

export default Products;