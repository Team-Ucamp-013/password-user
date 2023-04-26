const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config(); 

require('./db/mongodb')
const apiRoutes = require('./apis')

app.use(cors());

app.use(express.json())

app.use('/apis/v1', apiRoutes)

app.get('/', (req,res)=>{
    res.send('Servidor vivo')
})



const PORT = process.env.PORT || 5003

app.listen(PORT, ()=>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})