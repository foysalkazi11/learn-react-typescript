import React from 'react'
type InputProps = {
    handleChange : (event:React.ChangeEvent<HTMLInputElement>)=> void
    value:string
}

const Input = (props:InputProps) => {
    return (
        <input value={props?.value} onChange={props?.handleChange} />
        
    )
}

export default Input
