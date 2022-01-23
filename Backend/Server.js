const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/databse");

//config
dotenv.config({ path: "backend/config/config.env" });

// Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is Working on http://localhost:${process.env.PORT}`);
});
