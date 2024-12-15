import product from "../models/product.model.js";
import mongoose from 'mongoose';

export const getProducts = async (req,res) =>{
    try {
        const products =await product.find({});
        res.status(200).json({success:true,data:products});
    } catch (error) {
        console.log("Error in fetching products");
        res.status(500).json({success:false,message:"Server Error"});
    }
}

export const createProduct =async (req,res) =>{
    const product1 = req.body; //User will send this data

    if(!product1.name || !product1.price ||!product1.image){
        console.log(`${product1.name},${product1.price},${product1.image}`);
        return res.status(400).json({success:false,message:"please provide all fields"});
    }

    const newProduct = new product(product1) 

    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    } catch (error)  {
         console.error("Error In a created product");
         res.status(500).json({success:false, message: "Server Error"});
            
    }
    
}

export const updateProduct = async (req,res)=>{
    const{id} =req.params;
    //console.log(id);
    
    const productx =req.body;
    //console.log(productx);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({succes:false,message:"Invalid Product Id"});
    }

    try {

        const updatedProduct = await product.findByIdAndUpdate(id,productx,{new:true});
        res.status(200).json({success:true,data : updatedProduct});
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"server error"});
    }
}

export const deleteProduct = async (req,res) =>{
    const{id} =req.params;
    console.log("id: ",id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        //console.log(id)
        return res.status(404).json({succes:false,message:"Invalid Product Id"});
    }
    try {
        await product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Product Deleted."});
    } catch (error) {
        res.status(500).json({success:false,message:"server error"});
        console.log("error in deleting product: ",error.message);
    }
}