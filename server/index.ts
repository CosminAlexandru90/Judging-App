import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from 'cors';

dotenv.config();

const app: Express=express();

const corsOptions: CorsOptions={
    origin:["http://localhost:5173"],
}

app.use(cors(corsOptions));

app.get("/api",(request: Request,response: Response)=>{
    response.status(200).json({fruits: ["apple", "banana", "orange", "pepenas"]});
})

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})