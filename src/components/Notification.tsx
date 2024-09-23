import { AlertProps, Snackbar, SnackbarOrigin } from "@mui/material";
import { Dispatch, forwardRef, SetStateAction } from "react";
import MuiAlert from '@mui/material/Alert';
import { MessageInterface } from "../interface/Api";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface PropsInterface {
    message: MessageInterface;
    setMessage: Dispatch<SetStateAction<MessageInterface>>;
    vertical?: SnackbarOrigin['vertical']
    horizontal?: SnackbarOrigin['horizontal']
}

const Notification = (props: PropsInterface) => {
    const { message, vertical, horizontal } = props

    const handleClose = () => {
        props.setMessage({
            ...message,
            open: false,
        });
    };

    return (
        <Snackbar 
            open={message.open} 
            autoHideDuration={4000} 
            onClose={handleClose} 
            anchorOrigin={{ vertical: vertical ?? "bottom", horizontal: horizontal ?? "left" }}
        >
            <Alert onClose={handleClose} severity={message.type} sx={{ width: '100%' }}>
                {message.text}
            </Alert>
        </Snackbar>
    );
};

export default Notification;