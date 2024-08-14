import { findAll, findUserById, addUser, addProduct, addItemPurchase, loginUserQuery, subGroupList, getAllSubGroupListQuery, updateProductQuery, updateProductImage, addOfferProduct, getAllOffersQuery, updateOffersProduct, getOffersByLimitQuery, createProfileMVQuery, getProfileByIdQuery, getProfileByWorkQuery, addBanners, getProfileByEmailQuery, addJobPostQuery, addCvQuery, getJobPostByEmailQuery,  deleteOfferByIdQuery, getCvByEmailQuery, addMemberQuery, loginMemberQuery, getAllJobPostQuery, addDeliveryListQuery, getAllDeliveryListQuery, updateDeliveryStatusQuery, updateDeliveryAppTokenQuery, getDeliveryAppTokenQuery, registerCustomerQuery } from "../db/queries.js";
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

export const getAllOffers = async (req, res) => {
  try {
    const data = await getAllOffersQuery();
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in getAllProducts");
    res.status(500).json({ message: "Error in getAllProducts" });
  }
  //    return res.status(200).send("GetAllProduct")
};

export const getDeliveryAppToken = async (req, res) => {
  try {
    const data = await getDeliveryAppTokenQuery();
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in getDeliveryAppToken");
    res.status(500).json({ message: "Error in getDeliveryAppToken" });
  }
  //    return res.status(200).send("GetAllProduct")
};

export const getAllDeliverylist = async (req, res) => {
  try {
    const data = await getAllDeliveryListQuery();
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in getAllDeliveryListQuery");
    res.status(500).json({ message: "Error in getAllDeliveryListQuery" });
  }
  //    return res.status(200).send("GetAllProduct")
};

export const getSubGroupList = async (req, res) => {
  try {
    const data = await subGroupList();
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in getSubGroupList");
    res.status(500).json({ message: "Error in getSubGroupList" });
  }
  //    return res.status(200).send("GetAllProduct")
};

export const getAllJobPostMV = async (req, res) => {
  try {
    const data = await getAllJobPostQuery();
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in getAllJobPostMV");
    res.status(500).json({ message: "Error in getAllJobPostMV" });
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
      return res.status(200).json( response.data);
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

export const deleteOfferById = async (req, res) => {
  const id = req.params.id;
  console.log("id : ", id);
  try {
    const data = await deleteOfferByIdQuery(id);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in deleteProductById");
    res.status(500).json({ message: "Error in deleteProductById" });
  }
};


export const getProfileById = async (req, res) => {
  const { email} = req.body;

  try {
    const data = await getProfileByIdQuery(email);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in login user");
    return res.status(500).json({ message: "Error in login user" });
  }
};

export const getProfileByEmail = async (req, res) => {
  const { email} = req.body;

  try {
    const data = await getProfileByEmailQuery(email);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in getProfileByEmail user");
    return res.status(500).json({ message: "Error in getProfileByEmail user" });
  }
};

export const getJobPostByEmail = async (req, res) => {
  const { email} = req.body;

  try {
    const data = await getJobPostByEmailQuery(email);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in getJobPostByEmail user");
    return res.status(500).json({ message: "Error in getJobPostByEmail user" });
  }
};


export const getCvByEmail = async (req, res) => {
  const { email} = req.body;

  try {
    const data = await getCvByEmailQuery(email);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in getCvByEmail user");
    return res.status(500).json({ message: "Error in getCvByEmail user" });
  }
};

export const getProfileByWork = async (req, res) => {
  const { work} = req.body;

  try {
    const data = await getProfileByWorkQuery(work);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in login user");
    return res.status(500).json({ message: "Error in login user" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await loginUserQuery(email, password);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in login user");
    return res.status(500).json({ message: "Error in login user" });
  }
};

export const loginMember = async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await loginMemberQuery(email, password);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in login user");
    return res.status(500).json({ message: "Error in login user" });
  }
};

export const getOffersByLimit = async (req, res) => {
  // const {limit, offset} = req.body;
  // const limit = req.params.limit;
  // const offset = req.params.offset;
  const limit = parseInt(req.query.limit); // Default to 10 if not provided
  const offset = parseInt(req.query.offset);

  try {
    const data = await getOffersByLimitQuery(limit, offset);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in login user");
    return res.status(500).json({ message: "Error in login user" });
  }
};

export const updateProduct = async (req, res) => {
  const { barcode } = req.body;
  const img = req.file.filename;
  console.log("barcode",img);
  try {
    const data = await updateProductQuery(img, barcode);
    console.log(data);
    return res.status(200).json({ data });
    
  } catch (error) {
    console.log("Error in updateProduct");
    return res.status(500).json({ message: "Error in updateProduct" });
  }
};

export const updateImage = async (req, res) => {
  const {img, barcode } = req.body;
  // const img = req.file.filename;
  // console.log("barcode",img);
  try {
    const data = await updateProductImage(img, barcode);
    // console.log(data);
    return res.status(200).json({ data });
    
  } catch (error) {
    console.log("Error in updateImage");
    return res.status(500).json({ message: "Error in updateImage" });
  }
};

export const updateDeliveryStatus = async (req, res) => {
  const {orderstatus, serialno, id  } = req.body;
  // const img = req.file.filename;
  // console.log("barcode",img);
  try {
    const data = await updateDeliveryStatusQuery(orderstatus, serialno, id );
    // console.log(data);
    return res.status(200).json({ data });
    
  } catch (error) {
    console.log("Error in updateDeliveryStatus");
    return res.status(500).json({ message: "Error in updateDeliveryStatus" });
  }
};

export const updateDeliveryAppToken = async (req, res) => {
  const {token, id  } = req.body;
  // const img = req.file.filename;
  // console.log("barcode",img);
  try {
    const data = await updateDeliveryAppTokenQuery(token, id);
    // console.log(data);
    return res.status(200).json({ data });
    
  } catch (error) {
    console.log("Error in updateDeliveryAppToken");
    return res.status(500).json({ message: "Error in updateDeliveryAppToken" });
  }
};

export const updateOffers = async (req, res) => {
  const {id, Name, Price, Image } = req.body;
  // const img = req.file.filename;
  // console.log("barcode",img);
  try {
    const data = await updateOffersProduct(id, Name, Price, Image);
    // console.log(data);
    return res.status(200).json({ data });
    
  } catch (error) {
    console.log("Error in updateOffers");
    return res.status(500).json({ message: "Error in updateOffers" });
  }
};

export const getAllSubGroupList = async (req, res) => {
  // const { SubGroupName } = req.body;
  const SubGroupName = req.params.SubGroupName;
  try {
    const data = await getAllSubGroupListQuery(SubGroupName);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in getAllSubGroupList");
    return res.status(500).json({ message: "Error in getAllSubGroupList" });
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

export const registerCustomer = async (req, res) => {
  const { username, phone, password, address } = req.body;

  try {
    const data = await registerCustomerQuery(username, phone, password, address);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in create customer");
    return res.status(500).json({ message: "Error in create customer" });
  }
};

export const createDeliveryList = async (req, res) => {
  const { name, phone, address, orderlist, orderstatus} = req.body;

  try {
    const data = await addDeliveryListQuery(name, phone, address, orderlist, orderstatus);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in createDeliveryList");
    return res.status(500).json({ message: "Error in createDeliveryList" });
  }
};

export const createBannersMV = async (req, res) => {
  const { email, image } = req.body;

  try {
    const data = await addBanners(email, image );
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in create banners");
    return res.status(500).json({ message: "Error in create banners" });
  }
};

export const createJobPostMV = async (req, res) => {
  const { email, title, description } = req.body;

  try {
    const data = await addJobPostQuery(email, title, description );
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in createJobPostMV");
    return res.status(500).json({ message: "Error in create createJobPostMV" });
  }
};

export const createCvMV = async (req, res) => {
  const { email, name, cv } = req.body;

  try {
    const data = await addCvQuery( email, name, cv );
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in createCvMV");
    return res.status(500).json({ message: "Error in createCvMV " });
  }
};

export const createMemberMV = async (req, res) => {
  const { email, company, tradeid, activity} = req.body;

  try {
    const data = await addMemberQuery( email, company, tradeid, activity );
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in createCvMV");
    return res.status(500).json({ message: "Error in createCvMV " });
  }
};


export const createProfileMV = async (req, res) => {
  const { firstname, lastname, email, image, company, work, url, address} = req.body;

  try {
    const data = await createProfileMVQuery(firstname, lastname, email, image, company, work, url, address);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in create user");
    return res.status(500).json({ message: "Error in create user" });
  }
};

export const addOffers = async (req, res) => {
  const { Name, Price, Image} = req.body;

  try {
    const data = await addOfferProduct(Name, Price, Image);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in addOffers");
    return res.status(500).json({ message: "Error in create addOffers" });
  }
};

export const createProduct = async (req, res) => {
  const { branchName, productName, unit, mainGroup, subGroup, barcode, unitCost, profitMargin,profitMarkup, price1, imgUrl} = req.body;
 
  try {
    const data = await addProduct(branchName, productName, unit, mainGroup, subGroup, barcode, unitCost, profitMargin,profitMarkup, price1, imgUrl);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in create product");
    return res.status(500).json({ message: "Error in create product" });
  }
};

export const createItemPurchase = async (req, res) => {
  const {items} = req.body;
 
  try {
    const data = await addItemPurchase(items);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("Error in create item purchase");
    return res.status(500).json({ message: "Error in create item purchase" });
  }
};
