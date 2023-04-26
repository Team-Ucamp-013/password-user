const express = require('express')
const router = express.Router()

const passwordService = require('../services/password')
const userService = require('../services/user')
const userModel = require('../model/users')

const UserService = new userService(userModel)
const PasswordService = new passwordService(UserService)

router.put('/', async(req,res)=>{
    const {email,password, newPassword} = req.body
    try{
        await PasswordService.change(email,password,newPassword)
        res.send({
            message: "Contraseña Actualizada"
        })
        
    } catch(err){
        return res.send({
            message: "No se actualizo correctamente la contraseña"
        })
    }
})

module.exports = router