const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "You need to add a name"],
        minlength: [4, "Needs atleast 4 characters"]
    }, 
    price: { 
        type: Number,
        required: [true, "You need to add a price"]
    },
    url: { 
        type: String,
        default: ""
    },
    
}, {timestamps: true});

mongoose.model("Product", ProductSchema);