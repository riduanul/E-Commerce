const Product = require("../Models/ProductModel");

//Create Product
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(2001).jason({
    success: true,
    product,
  });
};

exports.getAllProducts = (req, res) => {
  res.status(200).json({ message: "ROUTE IS WORKING FINE" });
};
