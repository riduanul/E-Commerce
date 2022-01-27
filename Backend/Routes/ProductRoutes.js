const express = require("express");
const {
  getAllProducts,
  createProduct,
  upadateProduct,
  deleteProduct,
  getProductDetails,
} = require("../Controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../Middleware/Auth");

const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), upadateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
  .get(getProductDetails);

module.exports = router;
