const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  description: {
    type: String,
  },

  location: {
    type: String,
    required: true,
  },

  rooms: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    required: true,
    validate(value) {
      if (!(value === "Complete" || value === "Progress" || value === "Sold")) {
        throw new Error("Status not valid");
      }
    },
  },

  area: {
    type: Number,
    required: true,
  },

  coverImageUrl: {
    type: String,
  },

  gallery: [
    {
      imageUrl: {
        type: String,
      },
    },
  ],
});

const project = mongoose.model("Project", projectSchema);

module.exports = project;
