const cookieParser = require("cookie-parser");
const express = require("express");
const errorMiddleWare = require("./Middleware/error");
const app = express();

app.use(express.json());

app.use(cookieParser());
//Route Imports
const product = require("./Routes/ProductRoutes");
const user = require("./Routes/User.Routes");

app.use("/api/v1", product);
app.use("/api/v1", user);

//Middleware for Errors
app.use(errorMiddleWare);

module.exports = app;
