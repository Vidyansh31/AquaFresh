const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter the Name"]
    },
    description:{
        type : String,
        required: [true, "Please Enter the Description"]
    },
    price:{
        type : Number,
        required: [true, "Please Enter the Price"],
        maxLength:[8,"Price cannot exceed "]
    },
    rating:{
        type : Number,
        default:0
    },
    images : [
        {
            public_id:{
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }      
        }
    ],
    category: {
        type: String,
        required: [true, "Please Enter the Category"],
    },
    Stock: {
        type: Number,
        required: [true, "Please Enter the Stock"],
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews:[{
        name:{
            type: String,
            required: true,
        },
        rating:{
            type: Number,
            required: true,
        },
        comment:{
            type: String,
        }

    }],
    createdAt: {
        type: Date,
        default: Date.now,
      },
})


module.exports = mongoose.model("Product", productSchema);