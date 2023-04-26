const express = require('express')
const router = express.Router()

const userModel = require('../model/users')
const userService = require('../services/user')

const UserService = new userService(userModel)

router.post('/', async(req,res)=>{
    const body = req.body
    const user = await UserService.create(body)
    res.send(user)
})

module.exports = router