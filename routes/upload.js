const express = require("express");
const auth = require("../middlewares/Auth");
const AWS = require("aws-sdk");
const keys = require("../config/dev.js");
const uuid = require("uuid").v1;

const router = new express.Router();

const s3 = new AWS.S3({
  region: "eu-central-1",
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
  signatureVersion: "v4",
});

router.get("/api/upload", auth, async (req, res) => {
  const key = `${req.user.id}/${uuid()}.jpeg`;

  try {
    const uploadUrl = await s3.getSignedUrlPromise("putObject", {
      Bucket: "s3-imaraat-bucket",
      Key: key,
      Expires: 60,
    });
    res.status(200).send({ url: uploadUrl });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
