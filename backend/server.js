//const express =require('express');
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"; 

dotenv.config();
const app =express();
const PORT = process.env.PORT || 5000
app.use(express.json());//Allows us to accept json daya in req.body

app.use("/api/products",productRoutes);

 

app.listen(5000,() =>{
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
})

