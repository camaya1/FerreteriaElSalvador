import { Suspense } from "react"
import Login from "../pages/Login"
import { Navigate } from "react-router-dom"

interface PropsInterface {
    children?: React.ReactNode
}
const RenderElement =( props: PropsInterface ) => {
    const { children } = props
    return(
        <Suspense fallback={<p>Loading.....</p>}>
            { children }
        </Suspense>
    )
}
const Router = [
    {
        path: "login",
        element: <RenderElement children={<Login/>}/>,
    }, {
        path: "*",
        element: <Navigate to="/login"/>,
    }
]

export default Router