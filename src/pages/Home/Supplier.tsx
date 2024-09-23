import AddSupplier from "../../components/Supplier/Add";
import TableSupplier from "../../components/Supplier/Table";

import "../../styles/Products.scss"

const Supplier = () => {
    return (
        <div>
            <h1>Supplier</h1>
            <AddSupplier />
            <TableSupplier />
        </div>
    );
}
export default Supplier;