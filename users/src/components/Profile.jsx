import React, { useContext } from 'react'
import BtnChecout from './Checkout/BtnChecout'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const {userData, logout} = useContext(UserContext)
  const navigation = useNavigate()

  const handleLogout = () =>{
    logout()
    navigation('/')
  }

  return (
    <div> 
        Profile

       {
        userData ? (
          <div>
            <p>Bienvenido {userData.username}</p>
            <BtnChecout/>
            <button onClick={handleLogout}>Cerrar sesion</button>
          </div>
        ):(
          <p>No estas logeado</p>
        )
       }
    </div>
  )
}

export default Profile
