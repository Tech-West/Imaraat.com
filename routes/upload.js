const express = require("express");
const auth = require("../middlewares/Auth");
const AWS = require("aws-sdk");
const keys = require("../config/dev.js");
const uuid = require("uuid").v1;

const router = new express.Router();

const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
});

router.get("/api/upload", auth, (req, res) => {
  const key = `${req.user.id}/${uuid()}.jpeg`;

  s3.getSignedUrl(
    "putObject",
    {
      Bucket: "imaraat-bucket",
      ContentType: "jpeg",
      Key: key,
    },
    (err, url) => {
      res.send({ key, url });
    }
  );
});

module.exports = router;
