const express = require('express')
const router = express.Router()

const userModel = require('../model/users')
const userService = require('../services/user') 

const UserService = new userService(userModel)

router.get('/me', async(req,res)=>{
    const sessionUser = req.user
    if(!sessionUser){
        return res.send({
            message: 'Dewee esa no es tu familia '
        })
    }

    res.send({
        name: sessionUser.name,
        email: sessionUser.email
    })
})

router.post('/', async(req,res)=>{
    const body = req.body
    const user = await UserService.create(body)
    res.send(user)
})
module.exports = router