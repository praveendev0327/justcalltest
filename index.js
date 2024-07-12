import express from "express";
import bodyParser from "body-parser";
import appRouter from "./routes/index.js";
import { connectToDatabase } from "./db/index.js"
import cors from "cors"

const app = express();

app.use(cors());

app.use(express.json());

app.use("/",appRouter)

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'; 
connectToDatabase().then(()=>{
    app.listen(PORT,HOST, ()=>console.log("Server open at: ",PORT ));

}).catch(err=>{
    console.log("Error occure with mysql connection");
    process.exit(0);
})


