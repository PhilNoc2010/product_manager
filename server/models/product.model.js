const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product requires a title"],
        minlength: [2, "Product title is not long enough"]
    },
    price: {
        type: Number,
        required: [true, "Product requires a valid price"],
        min: [1, "Price must be at least $1"]
    },
    description: {
        type: String,
        required: [true, "Product must have a description"],
        minlength: [5, "Description must be at least 5 characters"]
    }
}, {timestamps: true})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;