import { createContext, Dispatch, SetStateAction } from "react"

export interface UserData {
    name: string
    email: string
    rolId: number
}
export interface UserInterface {
    token: string
    user: UserData
}

export interface ContextInterface {
    user: UserInterface;
    setUser: Dispatch<SetStateAction<UserInterface>>;
}


const ContextCreate =  createContext<ContextInterface>({
    user: {
        token: "",
        user: {
            name: "",
            email: "",
            rolId: 0
        }
    },
    setUser: () => {}
})

export default ContextCreate