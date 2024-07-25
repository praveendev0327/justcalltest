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

export const getAllOffersQuery = async () =>{
  const QUERY = "SELECT * FROM Offers";
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

export const subGroupList = async () =>{
  const QUERY = "SELECT DISTINCT SubGroup FROM MainGroup";
  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    console.log(result);
    return result[0];
  } catch (error) {
    console.log("Error occured on subGroupListAll data");
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

export const getProfileByIdQuery = async (email) =>{
  const QUERY = `SELECT * FROM mvprofile WHERE email = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on login user");
    throw error;
  }
}

export const getProfileByEmailQuery = async (email) =>{
  const QUERY = `SELECT * FROM mvbanners WHERE email = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on mv banners user");
    throw error;
  }
}

export const getProfileByWorkQuery = async (work) =>{

  const keywords = work.split(' ').filter(keyword => keyword.trim() !== '');
  
  // Build the SQL WHERE clause dynamically
  const whereClauses = keywords.map(keyword => `work LIKE ?`).join(' OR ');
  const queryParams = keywords.map(keyword => `%${keyword}%`);
  
  const QUERY = `SELECT * FROM mvprofile WHERE ${whereClauses}`;
  // const QUERY = `SELECT * FROM mvprofile WHERE work LIKE ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, queryParams);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on login user");
    throw error;
  }
}

export const getOffersByLimitQuery = async (limit, offset ) =>{
  const QUERY = `SELECT * FROM Offers ORDER BY id LIMIT ? OFFSET ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [limit, offset]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on login user");
    throw error;
  }
}

export const getAllSubGroupListQuery = async (subGroupName) =>{
  const QUERY = `SELECT * FROM MainGroup WHERE SubGroup = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [subGroupName]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on getAllSubGroupListQuery");
    throw error;
  }
}

export const updateProductQuery = async (img, barcode ) =>{
  const QUERY = `UPDATE MainGroup SET img = ? WHERE Barcode = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [img, barcode]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on updateProductQuery");
    throw error;
  }
}

export const updateProductImage = async (img, barcode ) =>{
  const QUERY = `UPDATE MainGroup SET image = ? WHERE Barcode = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [img, barcode]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on updateProductImage");
    throw error;
  }
}

export const updateOffersProduct = async (id, Name, Price, Image) =>{
  const QUERY = `UPDATE Offers SET Name = ?, Price = ?, Image = ? WHERE id = ?`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [Name, Price, Image, id]);
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log("Error occured on updateOffersProduct");
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
export const addBanners = async (email, image) =>{
  const QUERY = `INSERT INTO mvbanners(email, image) VALUES(?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email, image]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on add user");
    throw error;
  }
}

export const addJobPostQuery = async (email, title, description) =>{
  const QUERY = `INSERT INTO mvjobpost(email, title, description) VALUES(?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email, title, description]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on addJobPostQuery");
    throw error;
  }
}

export const addCvQuery = async (email, cv) =>{
  const QUERY = `INSERT INTO mvcvs(email, cv) VALUES(?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [email, cv]);
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error occured on addCvQuery");
    throw error;
  }
}

export const createProfileMVQuery = async (firstname, lastname, email, image, company, work, url, address ) =>{
  const QUERY = `INSERT INTO mvprofile(firstname, lastname, email, image, company, work, url, address) VALUES(?,?,?,?,?,?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [firstname, lastname, email, image, company, work, url, address]);
    console.log("email");
    return email;
  } catch (error) {
    console.log("Error occured on add mvprofile");
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

export const addOfferProduct = async (Name, Price, Image) =>{
  const QUERY = `INSERT INTO Offers(Name, Price, Image) VALUES(?,?,?)`;

  try{
    const client = await pool.getConnection();
    const result = await client.query(QUERY, [Name, Price, Image]);
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
