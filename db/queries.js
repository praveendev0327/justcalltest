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

export const loginUserQuery = async (email, password ) =>{
  const QUERY = `SELECT * FROM users WHERE email = ? AND password = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email, password]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on login user");
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
export const addProduct = async (branchName, productName, unit, mainGroup, subGroup, barcode, unitCost, profitMargin,profitMarkup, price1, imgUrl ) =>{
  const QUERY = `INSERT INTO Product(branchName, productName, unit, mainGroup, subGroup, barcode, unitCost, profitMargin,profitMarkup, price1, imgUrl) VALUES(?,?,?,?,?,?,?,?,?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [branchName, productName, unit, mainGroup, subGroup, barcode, unitCost, profitMargin,profitMarkup, price1, imgUrl]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on add product");
    throw error;
  }
}

export const addItemPurchase = async (items) =>{
  const QUERY = `INSERT INTO pc(items) VALUES(?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [items]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on add purchase items");
    throw error;
  }
}
