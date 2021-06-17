const mongoose = require("mongoose");

//CONNECTING TO DATABASE
mongoose
  .connect(
    "mongodb://ghulamghousdev:ggazfmdm12345@imaraat-shard-00-00.rzylt.mongodb.net:27017,imaraat-shard-00-01.rzylt.mongodb.net:27017,imaraat-shard-00-02.rzylt.mongodb.net:27017/imaraat?ssl=true&replicaSet=atlas-hnkpmi-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });