import React from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

const Register = () => {
    const {userData, setUserData} = useContext(UserContext)

    const saverUser = async()=>{
     const url = 'http://localhost:4008/apis/v1/register'
     const result = await axios.post(url, userData)
     console.log(result)
    }
    
    const handleChange = (e) =>{
     const {name, value} = e.target
     setUserData({
       ...userData,
       [name]: value
     })
     console.log(userData)
    }
     return (
       <div>
         
         <form>
           <input type="text" name="name"  onChange={handleChange} placeholder='Nombre'/>
           <input type="text" name="lastname"  onChange={handleChange}  placeholder='Apellido'/>
           <input type="text" name="username" onChange={handleChange}  placeholder='Nombre de usuario'/>
           <input type="text" name="email"  onChange={handleChange} placeholder='Correo' />
           <input type="text" name="password"  onChange={handleChange} placeholder='Contraseña'/>
           <button onClick={()=> saverUser()}>Enviar</button>
         </form>
       </div>
     )
}

export default Register
