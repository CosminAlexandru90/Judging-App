const express=require("express");
const app=express();
const cors=require("cors");
const corsOptions={
    origin:["http://localhost:5173"],
}

app.use(cors(corsOptions));

app.get("/api",(request,response)=>{
    response.status(200).json({fruits: ["apple", "banana", "orange", "pepenas"]});
})

app.listen(8080,()=>{
    console.log("Listening on 8080");
})