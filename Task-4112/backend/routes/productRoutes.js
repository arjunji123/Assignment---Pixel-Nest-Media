const express = require("express");
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

module.exports = (db) => {
  router.get("/products", (req, res) => getAllProducts(req, res, db));
  router.post("/products", (req, res) => addProduct(req, res, db));
  router.put("/products/:id", (req, res) => updateProduct(req, res, db));
  router.delete("/products/:id", (req, res) => deleteProduct(req, res, db));

  return router;
};
