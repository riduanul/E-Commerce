const express = require("express");
const {
  getAllProducts,
  createProduct,
  upadateProduct,
  deleteProduct,
} = require("../Controller/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(upadateProduct).delete(deleteProduct);

module.exports = router;
