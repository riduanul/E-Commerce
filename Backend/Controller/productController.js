const Product = require("../Models/ProductModel");
const ErrorHandler = require("../Utils/ErrorHandler");
const catchAsyncError = require("../Middleware/catchAsyncError");
const ApiFeatures = require("../Utils/apiFeatures");

//Create Product---Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;
  const product = await Product.create(req.body);
  res.status(201).send({
    success: true,
    product,
  });
});

// Get all products
exports.getAllProducts = catchAsyncError(async (req, res, next) => {
  const resultPerpage = 5;
  const productCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)

    .search()
    .filter()
    .pagination(resultPerpage);

  const products = await apiFeature.query;
  res.status(200).send({
    success: true,
    products,
    productCount,
  });
});

// Update product-- Admin

exports.upadateProduct = catchAsyncError(async (req, res, next) => {
  let product = Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
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
});
// Get Product Details

exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).send({
    success: true,
    product,
  });
});

// Delete Product

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  await product.remove();
  res.status(200).send({
    success: true,
    message: "Product Deleted successfuly",
  });
});
