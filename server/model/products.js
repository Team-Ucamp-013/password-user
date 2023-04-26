const mongoose = require('mongoose')

const {Schema, model} = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      sku: {
        type: String,
        required: true
      },
      image: {
        type: String
      }
    }, {
      versionKey: false,
      timestamps: true
    }
)

const ProductModel = model('products', productSchema)

module.exports = ProductModel