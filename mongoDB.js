const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://hosseint14:password@cluster0.riix9.mongodb.net/products?retryWrites=true&w=majority";

const postProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store data!" });
  }
  client.close();

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);

  let products;

  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
  } catch (error) {
    return res.json({ message: "Could not fetch data!" });
  }
  client.close();

  res.json(products);
};

exports.postProduct = postProduct;
exports.getProducts = getProducts;
