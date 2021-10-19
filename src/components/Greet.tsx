import React from 'react'

type GreetProps = {
    name:string
    messageCount?:number
    isLogin:boolean
}

const Greet = (props:GreetProps) => {
    const {messageCount = 0} = props
    return (
        <div>
            <h2> {props?.name}! you have {messageCount} messgae</h2>
            <h3> {props?.isLogin ? `wellCome ${props?.name}` : "You need login show message"}</h3>

        </div>
    )
}

export default Greet
