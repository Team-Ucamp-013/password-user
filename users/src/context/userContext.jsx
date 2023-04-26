import React, { createContext, useState } from 'react'

export const UserContext = createContext({});

const UserProvider = ({children}) => {
    const [userData, setUserData] = useState({})
 
    const logout = () =>{
      setUserData(null)
    }
  return (
    <div>
      <UserContext.Provider value={{userData,setUserData,logout}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserProvider
