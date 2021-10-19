import React from 'react'

type PersonListProps = {
    list: {
        firstName:string
        lastName:string
    }[]
}

const PersonList = (props:PersonListProps) => {
    return (
        <div>
            {props?.list?.map(item =>{
                return(
                    <h4 key={item?.firstName}>{item?.firstName} {item?.lastName}</h4>
                )
            })}
        </div>
    )
}

export default PersonList
