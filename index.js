import express from "express";
import bodyParser from "body-parser";
import appRouter from "./routes/index.js";
import { connectToDatabase } from "./db/index.js"
import multer from "multer";
import cors from "cors"

const upload = multer({
    dest: './upload/images'
})

const app = express();

app.use(cors());

app.use(express.json());

app.use("/",appRouter)

app.post("/upload",upload.single('profile'),(req,res) => {
      console.log(req.file);
})

app.use('/productimages', express.static('./upload/images'))

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'; 
connectToDatabase().then(()=>{
    app.listen(PORT,HOST, ()=>console.log("Server open at: ",PORT ));

}).catch(err=>{
    console.log("Error occure with mysql connection");
    process.exit(0);
})


