import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import UserProvider from './context/userContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import {PayPalScriptProvider} from '@paypal/react-paypal-js'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/register',
    element: 
    <UserProvider>
      <PayPalScriptProvider options={{"client-id": "AaGD_mJtE7EC8x8AKctXxKaG_rdsmrQuP0ENDnAnzko5F960p1YZvnZWdf84wDxAR21Om3KlQwqGjYNe",
    components: "buttons",
    currency: "USD"}}>
      <Register />
      </PayPalScriptProvider>
      </UserProvider>
  },
  {
    path:'/login',
    element:
    <UserProvider>
       <PayPalScriptProvider>
       <LoginForm />
       </PayPalScriptProvider>
      </UserProvider>
  },
  {
    path: '/profile',
    element:<UserProvider>
      <PayPalScriptProvider>
      <Profile />
      </PayPalScriptProvider>
      </UserProvider>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
