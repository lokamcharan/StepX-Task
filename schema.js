

const mongoose=require('mongoose')


const productschema=new mongoose.Schema({

    productName:String,
    productNumber:String,
    expiryDate:Date,
    mrp:Number
})

const Product=mongoose.model('Product',productschema)
module.exports=Product



