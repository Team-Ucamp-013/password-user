const mongoose = require('mongoose')
const {Schema, model} = mongoose
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})

userSchema.plugin(uniqueValidator, {message: 'El email ya existe'})

userSchema.pre('save', function(next){
    console.log('----->', this.email, this.password)
    const hashedPassword = bcrypt.hashSync(this.password, 12)
    this.password = hashedPassword

    next()
})

const userModel = model('usuarios', userSchema)

module.exports = userModel