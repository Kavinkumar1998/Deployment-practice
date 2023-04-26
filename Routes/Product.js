import express from "express";
import { Phone } from "../Model/Content.js";

const router = express.Router();

//router for adding products
router.post("/addproducts",async(req,res)=>{
    try{
const{product,company,model,image,highlight,price}= req.body;
let Product = await new Phone({
    product:product,
    company:company,
    model:model,
    image:image,
    highlight:highlight,
    price:price 
}).save();
res.status(200).json({message:"Data upadted sucessfully"})
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
})

//router for getting product data
router.get("/allproducts",async(req,res)=>{
    try{
let allproduct = await Phone.find();
if(!allproduct){
    res.status(400).json({message: "Internal Server Error"});
}else{
res.status(200).json(allproduct)
} 
}catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
});



const productRouter = router;
export {productRouter};