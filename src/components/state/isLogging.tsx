import React, {useState} from 'react'

function isLogging() {
  const [isLoggedIn,setisLoggedIn] = useState(false) 

  const handleLogin = () => {
    setisLoggedIn(true)
  }

  const handleLogout = () => {
    setisLoggedIn(false)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User is - {isLoggedIn ? 'LogIn' : 'LogOut'}</p>
    </div>
  )
}

export default isLogging
