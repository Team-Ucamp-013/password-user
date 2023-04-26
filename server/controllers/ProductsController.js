const ProductModel = require('../model/products')

const getProducts = async() =>{
    const products = await ProductModel.find({})
    return products
}
const getProductsById = async(_id) =>{
    return ProductModel.findById(_id);
}

const createProduct = async(product) =>{
    const newProduct = new ProductModel(product);
    return newProduct.save()
}

const updateProduct = async(_id, product) =>{
    return ProductModel.findByIdAndUpdate({_id}, product,{
   upsert:false,
   new:true
})
}

const deleteProducts = async(_id) =>{
    return ProductModel.findByIdAndRemove(_id)
}

module.exports ={
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProducts
}