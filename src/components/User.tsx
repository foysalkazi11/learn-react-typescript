import React,{useState} from 'react'
import {AuthUser} from './props.types'
const obj = {
    name:"Foysal",
    email:"foysalkazi11@gmail.com"
}

const User = () => {
    const [user,setUser] = useState<AuthUser >({} as AuthUser)
    const handleLogIn = ()=>{
        setUser(obj)
    }
    const handleLogOut = ()=>{
        //
    }
    return (
        <div>
            <button onClick={handleLogIn}>LogIn</button>
            <button onClick={handleLogOut}>LogOut</button>
            {user ? <p>User name {user?.name} email : {user?.email}</p>:"user is not Login"}
        </div>
    )
}

export default User
