import express from "express";
import { Order } from "../Model/Orders.js";

const router = express.Router();


//router for addinng order
router.post("/addorder",async(req,res)=>{
    try{
const{orders,total,address}=req.body;
    let newOrder = new Order({orders,total,address}).save();
    res.status(200).json({message :"Orders Placed"})

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error",error})
   
    }
})



///router getting order data
router.get("/Orders",async(req,res)=>{
    try{

        let allorders =  await Order.find();
        res.status(200).json(allorders)

    }catch(error){
   console.log(error);
        res.status(500).json({message:"Internal Server Error"}) 
    
    }
})


//router for deleting order 

router.delete("/cancelOrder/:id",async(req,res)=>{
    try{
const {id} = req.params;
let order = await Order.findOneAndDelete({_id:id});
 if(!order){
        res.status(400).json({message:"order is not available"});
      }
      else{
     res.status(200).json({message:"Order cancelled Successfully"});
      }
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
})



const OrderRouter = router;
export {OrderRouter}