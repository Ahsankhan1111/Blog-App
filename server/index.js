const express = require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
mongoose.connect(process.env.mongo_url).then(()=>{
    console.log("database connected");
}).catch((err)=>{
        console.log(err);
    }
)
const app = express();

app.listen(3000,()=>{
    console.log(`Server listening on Port 3000`);
})