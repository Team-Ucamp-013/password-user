const express = require('express')
const router = express.Router()

const userRouter = require('./users')
const authRouter = require('./auth')
const authMiddleware = require('../middleware/authorization') 
const registerRouter = require('./register')

const productsRouter = require('./products')
router.use('/products',productsRouter)

const passwordRouter = require('./password')
router.use('/changeps', passwordRouter)

router.use('/auth', authRouter)
router.use('/register', registerRouter)

router.use(authMiddleware)
router.use('/user', userRouter)

module.exports = router