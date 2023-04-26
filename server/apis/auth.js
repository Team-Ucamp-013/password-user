const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()

const userService = require('../services/user')
const userModel = require('../model/users')
const authService = require('../services/auth')

require('dotenv').config()

const UserService = new userService(userModel)
const AuthService = new authService(UserService)
const JWT_SECRET = process.env.JWT_SECRET_PS

router.post('/login', async(req,res)=>{
    const {email, password} = req.body
    console.log(req.body)
    try{
        const user = await AuthService.login(email,password)
       console.log(user)
        const userRole = {
            ...user,
            role: 'admin',
            permissions: ['user:me']
        }

        const token = jwt.sign({
            data: userRole,
            exp:  Math.floor(Date.now() / 1000) + (60 * 60)  
        },JWT_SECRET)
     
        res.send({
            _id: user._id,
            token
        })
    } catch(error){
        console.error(error)
    }
})

module.exports = router