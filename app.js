const express = require("express");
const bodyParser = require("body-parser");
const mongoDB = require("./mongoDB");
const mongoose = require("./mongoose");

const app = express();

app.use(bodyParser.json());

// app.post("/products", mongoDB.postProduct);

// app.get("/products", mongoDB.getProducts);

app.post("/products", mongoose.postProduct);

app.get("/products", mongoose.getProducts);

app.listen(3000);
