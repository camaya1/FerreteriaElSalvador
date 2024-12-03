import { useState } from "react";
import ContextCreate from "../interface/Context";
interface PropsInterface {
    children: React.ReactNode;
}

const Context = ( props: PropsInterface  ) => {
    const { children } = props;
    const [user, setUser] = useState({
        token: "",
        user: {
            name: "",
            email: "",
            rolId: 0
        }
    });

    return (
        <ContextCreate.Provider value={{ user, setUser }}>
            {children}
        </ContextCreate.Provider>
    );
}

export default Context;
