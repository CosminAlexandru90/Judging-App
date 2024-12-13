const express=require("express");
const cors=require("cors");
require('dotenv').config();

const app=express();

const corsOptions={
    origin:["http://localhost:5173"],
}

app.use(cors(corsOptions));

app.get("/api",(request,response)=>{
    response.status(200).json({fruits: ["apple", "banana", "orange", "pepenas"]});
})

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})