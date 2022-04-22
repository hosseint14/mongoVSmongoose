const mongoose = require("mongoose");
const { readConfigFile } = require("typescript");

const Product = require("./models/product");

mongoose
  .connect(
    "mongodb+srv://hosseint14:d6dL0osrNSg2H5Nb@cluster0.riix9.mongodb.net/products?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connection successfull");
  })
  .catch(() => {
    console.log("connection faild!");
  });

const postProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();

  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();

  res.json(products);
};

exports.postProduct = postProduct;
exports.getProducts = getProducts;
