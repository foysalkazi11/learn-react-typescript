import React from 'react'
export type ProfileProps = {
    name:string
}

const Profile = ({name}:ProfileProps) => {
    return (
        <div>
            {name} is login in.
        </div>
    )
}

export default Profile
