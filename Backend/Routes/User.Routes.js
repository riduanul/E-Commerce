const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPasswor,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
} = require("../Controller/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../Middleware/Auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPasswor);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

module.exports = router;
