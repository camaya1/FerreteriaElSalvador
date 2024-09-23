import { Button, TextField } from "@mui/material"

const AddSupplier = () => {
    return (
        <>
            <div className="div-container-add">
                <TextField label="ID del proveedor"/>
                <TextField label="Nombre del proveedor"/>
                <TextField label="Telefono"/>
                <TextField label="Correo electronico"/>
                <TextField label="Direccion"/>
            </div>
            <div className="content-action-button">
                <Button variant="contained" color="primary">
                    Guardar
                </Button>
            </div>
        </>
    )
}

export default AddSupplier;