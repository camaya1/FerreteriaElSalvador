import { Button, TextField } from "@mui/material"

const AddProduct = () => {
    return (
        <>
            <div className="div-container-add">
                <TextField label="Nombre del producto"/>
                <TextField label="Categoria"/>
                <TextField label="Precio del producto"/>
                <TextField label="Cantidad en Stock"/>
                <TextField label="Proveedor"/>
            </div>
            <div className="content-action-button">
                <Button variant="contained" color="primary">
                    Guardar
                </Button>
            </div>
        </>
    )
}

export default AddProduct