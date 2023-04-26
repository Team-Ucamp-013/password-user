const mongoose = require('mongoose')

const url =  `mongodb+srv://${process.env.USER_MONGO}:${process.env.USER_MONGO_PASS}@cluster0.${process.env.MONGO_ID_PASS}.mongodb.net/users?retryWrites=true&w=majority`

mongoose.connect(url)
.then(()=>{
    console.log('Conexión a la base de datos completada')
})
.catch((error)=>{console.error(error);})