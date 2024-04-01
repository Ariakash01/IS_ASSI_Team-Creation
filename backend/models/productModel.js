const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id : {
        type: Number,
        required: [true, "Please enter product name"],
       
    },
    first_name: {
        type: String,
        required: true,
       
    },
   last_name: {
        type: String,
        required: [true, "Please enter product description"]
    },
    email: {
        type: String,
        default: 0
    },
    gender: 
        {
            
        type: String,
        required: true
          
        }
    ,
    avatar: {
        type: String,
        required: [true, "Please enter product category"],
    },
    domain: {
        type: String,
        required: [true, "Please enter product seller"]
    },
    available: {
        type:Boolean,
        required: [true, "Please enter product stock"]
    }
})

let schema = mongoose.model('Product', productSchema)

module.exports = schema