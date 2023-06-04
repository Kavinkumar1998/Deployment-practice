import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { DatabaseConnection } from "./DatabaseConnnecion.js";
import { productRouter } from "./Routes/Product.js";
import { signupRouter } from "./Routes/Signup.js";
import { loginRouter } from "./Routes/Login.js";
import { cartRouter } from "./Routes/Cart.js";

dotenv.config();
DatabaseConnection();
const app = express();
app.use(express.json());
app.use(cors());
 const PORT = process.env.PORT;
 app.get("/",(req,res)=>{
    try{
        res.send("Welcome to Deployment server")
    }
    catch(error){
        res.status(500).send({message:"Internal Server Error"})
    }
 });
 app.use("/",signupRouter);
 app.use("/",loginRouter);
 app.use("/",productRouter);
app.use("/",cartRouter);
 
app.listen(PORT,()=>console.log(`server started at ${PORT}`));