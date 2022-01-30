const { Router } = require("express");
const express = require("express");
const {
  newOrder,
  myOrders,

  getSingleOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../Controller/OrderController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../Middleware/Auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
