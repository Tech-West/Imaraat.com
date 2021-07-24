const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },

  companyName: {
    type: String,
    required: true,
    trim: true,
  },

  companyBio: {
    type: String,
    required: true,
  },

  companyWebsite: {
    type: String,
  },

  companyAddress: {
    type: String,
  },

  companyPhone: {
    type: String,
  },

  logoImageUrl: {
    type: String,
  },

  coverImageUrl: {
    type: String,
  },
});

const profile = mongoose.model("Profile", profileSchema);

module.exports = profile;
