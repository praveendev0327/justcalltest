import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

export const pool = createPool({
    port : "3306",
    password : "Pree@0327",
    host : "justcall.ae",
    database : "u873332354_justcalldb",
    user : "u873332354_justcall"
})

export const connectToDatabase = async () =>{
    try{
        await pool.getConnection();
        console.log("Successfully Connected");
    }catch(error){
        console.log("database error");
        console.log(error);
        throw error;
    }
}
