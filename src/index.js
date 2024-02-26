// require('dotenv').config({path:'./env'})


import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()

























// (async()=>{
   
//     try {
//        await mongoose.connect(`${process.env.MONOGDB_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("Error",error);
//             throw error;
//         })
//         app.listen (procces.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error", error);
//         throw error;
//     }
// })()