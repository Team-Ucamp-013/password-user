import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const LoginForm = () => {
    // const [ loginForm, setLoginForm] = useState()
    const [userData, setUserData] = useState({})

    const url = 'http://localhost:4008/apis/v1/auth/login'
    const url2 = 'http://localhost:4008/apis/v1/user/me'
    const navigation = useNavigate()

    const handleSubmit = ()=>{
     console.log(userData)

     axios.post( url, userData)
     .then(res=>{
        console.log(res.data)
        return(
            axios.get(url2,{
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    Authorization : `Bearer ${res.data.token}`
                }
            }).then( response =>{
                console.log(response.data)
                setUserData(response.data)
                navigation('/profile')
            })
        )
     })
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
        <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
        <input type="text" name="password" placeholder='Password' onChange={handleChange}/>
        <button onClick={()=> handleSubmit()}>Enviar</button>
      
    </div>
  )
}

export default LoginForm
