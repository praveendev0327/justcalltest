import {pool} from "./index.js";

export const findAll = async () =>{
    const QUERY = "SELECT * FROM users";
    try{
      const client = await pool.getConnection();
      const result = await client.query(QUERY);
      console.log(result[0]);
      return result[0];
    } catch (error) {
      console.log("Error occured on find all data");
      throw error;
    }
}

export const findUserById = async (id) =>{
    const QUERY = "SELECT * FROM users WHERE id = ?";
    try{
      const client = await pool.getConnection();
      const result = await client.query(QUERY, [id]);
      console.log(result[0]);
      return result[0];
    } catch (error) {
      console.log("Error occured on find by id");
      throw error;
    }
}

export const addUser = async (username, email, password ) =>{
    const QUERY = `INSERT INTO users(username, email, password) VALUES(?,?,?)`;

    try{
      const client = await pool.getConnection();
      const result = await client.query(QUERY, [username, email, password]);
      console.log(result);
      return result;
    } catch (error) {
      console.log("Error occured on add user");
      throw error;
    }
}