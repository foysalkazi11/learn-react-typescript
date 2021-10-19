import React from 'react'

type HeadingWrperProps = {
    children:React.ReactNode
}

const HeadingWrper = (props:HeadingWrperProps) => {
    return (
        <div>
            {props?.children}
        </div>
    )
}

export default HeadingWrper
