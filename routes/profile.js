const express = require("express");
const auth = require("../middlewares/Auth");
const Profile = require("../models/Profile");
const router = new express.Router();

//To create new company profile
router.post("/api/profile", auth, async (req, res) => {
  const profile = new Profile({ user: req.user._id, ...req.body });
  try {
    await profile.save();
    res.status(200).send({ profile });
  } catch (error) {
    res.status(400).send(error);
  }
});

//To get the company profile
router.get("/api/profile", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    await profile.populate("user").execPopulate();
    res.status(200).send(profile);
  } catch (err) {
    res.status(400).send({ err });
  }
});

//To update company profile
router.patch("/api/profile", auth, async (req, res) => {
  //Checking if the updates are allowed
  const allowedUpdates = [
    "companyBio",
    "companyWebsite",
    "logoImageUrl",
    "coverImageUrl",
    "companyName",
  ];
  const updates = Object.keys(req.body);
  const isAllowed = updates.every((cur) => allowedUpdates.includes(cur));
  if (!isAllowed) {
    return res.status(400).send({ err: "Wrong update attempt" });
  }

  //Updating the profile if allowed
  try {
    await Profile.updateOne({ user: req.user._id }, { ...req.body });
    const profile = await Profile.findOne({ user: req.user._id });
    await profile.populate("user").execPopulate();
    res.status(200).send(profile);
  } catch (err) {
    res.status(500).send({ err });
  }
});

//Adding an office to company profile
router.put("/api/profile/office", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).send({ err: "Profile not found" });
    }
    profile.offices.push(req.body);
    await profile.save();
    res.status(200).send(profile);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Deleting a specific office from company profile by id
router.delete("/api/profile/office/:id", auth, async (req, res) => {
  try {
    //Finding the profile
    const profile = await Profile.findOne({ _id: req.user._id });
    //Checking if the profile exist
    if (!profile) {
      return res.status(404).send({ err: "Profile not found" });
    }
    //Finding the office
    const office = profile.offices.find(
      (office) => office._id.toString() === req.params.id
    );
    //Checking if such office exist
    if (!office) {
      return res.status(404).send({ err: "Office not found" });
    }
    //Finding the index of office to remove it
    const removeIndex = profile.offices
      .map((office) => office._id.toString())
      .indexOf(req.params.id);
    //Removing that office
    profile.office.splice(removeIndex, 1);
    //Saving the post
    await profile.save();
    res.status(200).send(profile.offices);
  } catch (err) {
    res.status(500).send({ err });
  }
});

module.exports = router;
