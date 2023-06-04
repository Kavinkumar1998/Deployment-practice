import express from "express";
import { Cart } from "../Model/Cart.js";

const router = express.Router();


//router for adding cart

router.post("/addtocart",async(req,res)=>{
    try{
const{product,quantity,user}=req.body;
let items= await Cart.findOne({product:product});
if(items){
    res.status(400).json({meassage:"Item Already Added to Cart"});
}else{
let cart = new Cart({product,quantity,user,craetedAt}).save();
res.status(200).json({message:"Product Added successfully"});
    }}
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
})

///router for cart data
router.get("/Cart",async(req,res)=>{
    try{
let allcart = await Cart.find();
res.status(200).json(allcart);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"}) 
    }
});

//router for deleting items from cart

router.delete("/removeFromCart/:id",async(req,res)=>{
    try{
      let item = await Cart.findByIdAndDelete({_id:id});
      if(!item){
        res.status(400).json({message:"Internal Server Error"});
      }
      else{
     res.status(200).json({message:"Item Removed Successfully"})
      }
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"}) 
    }
})


const cartRouter = router;
export {cartRouter}