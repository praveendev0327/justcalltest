import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

export const pool = createPool({
    port : process.env.MYSQL_PORT,
    password : process.env.MYSQL_PASSWORD,
    host : process.env.MYSQL_HOST,
    database : process.env.MYSQL_DATABASE_NAME,
    user : process.env.MYSQL_USER
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
