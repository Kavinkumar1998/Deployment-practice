import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    orders: {
        type: mongoose.Schema.Types.Object,
        ref: "Cart"
      },
      total:{
        type:Number,
        required: true
      },
      address:{
        type:String,
        required: true
      }
})

const Order = mongoose.model("Order",orderSchema);
export{Order}