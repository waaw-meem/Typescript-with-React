import React,{useReducer, useState} from 'react'

type authUser = {
    name:string,
    email:string
}

function User() {
    const [user,setUser] = useState<authUser | null>(null) 

    const handleLogin = () => {
      setUser({
        name:'Wali Muhammad',
        email:'wm401238@gmail.com'
      })
    }
  
    const handleLogout = () => {
        setUser(null)
    }
  
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User email is - {user?.email}</p>
      <p>User name is - {user?.name}</p>
    </div>

  )
}

export default User
