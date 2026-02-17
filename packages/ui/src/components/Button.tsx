import React from 'react'
import { Button as RNButton, ButtonProps } from "react-native";
 
export const Button: React.FunctionComponent<ButtonProps> = (props) => {
    return <RNButton {...props} />
}