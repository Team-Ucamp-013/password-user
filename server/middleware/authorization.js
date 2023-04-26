const jwt = require('jsonwebtoken')
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET_PS

const authMiddleware = (req,res,next) =>{
    const {authorization} = req.headers
    const token = authorization.split(' ')[1]

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded.data
        const url = req.url.replace(/\//g, ':').slice(1)
        if(req.user.permissions.indexOf(url) === -1){
            return res.send({
                 error: 'No deberías estar aquí'
            })
        }
        next()
    } catch(error){
        return res.send({
            error: error.message
        })
    }
}

module.exports = authMiddleware