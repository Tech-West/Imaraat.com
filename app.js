const express = require("express");
require("./database/mongoose");
const app = express();
const cors = require("cors");
const UserRouter = require("./routes/User");


//To recognize incoming requests as json object.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserRouter);

//Defining Port
const port = process.env.Port || 5000;
const server = app.listen(port, () => {
  console.log(`Imaraat listening at http://localhost:${port}`);
}); 