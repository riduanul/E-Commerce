const Product = require("../Models/ProductModel");

//Create Product---Admin
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).send({
    success: true,
    product,
  });
};

// Get all products

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).send({ success: true, products });
};

// Update product-- Admin

exports.upadateProduct = async (req, res, next) => {
  let product = Product.findById(req, params.id);
  if (!product) {
    return res.status(500).send({
      success: false,
      message: "Product not found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).send({
    success: true,
    product,
  });
};
