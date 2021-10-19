import React from 'react'

type ListProps<T> = {
    itmes : T[]
    onClick : (value: T) => void
}

const List = <T extends {}>( props:ListProps<T>) => {
    return (
        <div>
            {props?.itmes?.map((item,index) =>{
                return(
                    <div key={index} onClick={()=>props?.onClick(item)}> {item}</div>
                )
            })}
        </div>
    )
}

export default List
