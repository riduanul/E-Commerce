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

  const resultPerpage = 8;
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

exports.updateProduct = catchAsyncError(async (req, res, next) => {
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

// Create New Review or Update the review

exports.createProductReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString());
      (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }
  let avg = 0;

  product.reviews.forEach((rev) => (avg += rev.rating));

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });
  res.status(200).send({
    success: true,
  });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).send({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Reviews

exports.deleteReviews = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product.review) {
    return next(new ErrorHandler("Review Not Found", 404));
  }
  await product.review.remove();
  res.status(200).send({
    success: true,
    message: "Review Deleted successfuly",
  });
});
