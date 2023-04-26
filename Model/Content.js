import mongoose from "mongoose";


const phoneSchema= new mongoose.Schema({
    
    product:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    model:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    highlight:{
        type:[String],
        required:true
    },
    price:{
      type:Number,
      required:true
    }
})

const Phone = mongoose.model("Phone",phoneSchema)

export {Phone}