import { AlertColor } from "@mui/material"

export interface MessageInterface {
    text: string
    type: AlertColor
    open: boolean
}