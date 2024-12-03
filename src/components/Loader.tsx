import { Dispatch, SetStateAction } from 'react';
import {
    Backdrop,
    CircularProgress
} from '@mui/material';

interface PropsInterface {
    loader: boolean
    inPage: boolean
    setLoader?: Dispatch<SetStateAction<boolean>>
}
const Loader = ( props: PropsInterface ) => {
    return (
        <>
            {
                props.inPage ?
                    <div style={{ display:'flex', justifyContent: 'center', width: '100vw', height: "100vh" }}>
                        <div style={{ margin: "auto"}}>
                            <CircularProgress color="inherit" />
                        </div>
                    </div>
                    :
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={props.loader}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
            }
        </>
    )
}

export default Loader;
