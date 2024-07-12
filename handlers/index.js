import { findAll, findUserById, addUser } from "../db/queries.js";
import bodyParser from "body-parser";
import https from "https";
import axios from "axios";
export const getAllUsers = async (req, res) => {
  try {
    const data = await findAll();
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in getAllProducts");
    res.status(500).json({ message: "Error in getAllProducts" });
  }
  //    return res.status(200).send("GetAllProduct")
};

export const getSerpApi = async (req, res) => {
 
  const id = req.params.id;
  let dat = JSON.stringify({
    q: id,
  });
  console.log("in",id);
  let config = {
    method: "post",
    url: "https://google.serper.dev/images",
    headers: {
      "X-API-KEY": "32a40db5937138da88c8cbc39b05aea5c018e654",
      "Content-Type": "application/json",
    },
    data: dat,
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return res.status(200).json( JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ message: "Error in getImageLink" });
    });
};
export const getUserById = async (req, res) => {
  const id = req.params.id;
  console.log("id : ", id);
  try {
    const data = await findUserById(id);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in getAllProducts");
    res.status(500).json({ message: "Error in getAllProducts" });
  }
};

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const data = await addUser(username, email, password);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in create user");
    return res.status(500).json({ message: "Error in create user" });
  }
};
