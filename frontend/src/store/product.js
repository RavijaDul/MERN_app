//import { data } from "react-router-dom";
import {create}  from "zustand";

export const useProductStore = create((set)=>({
    products : [],
    setProducts:(products) => set({products}),
    // createProduct: async (newProduct) =>{
    //     if(!newProduct.name || !newProduct.image || !newProduct.price){
    //         return {success:false,message:"Please fill all the fields."}
    //     }
    //     const res = await fetch ("/api/products",{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify(newProduct)
    //     })
    //     const data = await res.json();
    //     set((state) => ({product:[...state.products,data.data]}));
    //     return{success:true,message:"Product created succesfully."}
    // }
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
          return { success: false, message: "Please fill all the fields." };
        }
      
        try {
          const res = await fetch("/api/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
          });
      
          // Check if response is okay before parsing JSON
          if (!res.ok) {
            const errorMessage = await res.text(); // Attempt to capture any error message from the server
            return { success: false, message: errorMessage || "Failed to create product." };
          }
      
          const data = await res.json();
          set((state) => ({ products: [...state.products, data.data] }));
          return { success: true, message: "Product created successfully." };
        } catch (error) {
          return { success: false, message: "An error occurred. Please try again later." };
        }
      }
      

}));

