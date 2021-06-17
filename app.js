const express = require("express");
const app = express();
const cors = require("cors");


//To recognize incoming requests as json object.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Defining Port
const port = process.env.Port || 5000;
const server = app.listen(port, () => {
  console.log(`Ignio Skills listening at http://localhost:${port}`);
}); 