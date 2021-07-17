const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  //Defining the email property on User Schema
  email: {
    type: String,
    required: [true, "Email field cannot be empty"],
    trim: true,
    unique: [true, "This email already exists"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Provided Email is not a valid Email");
      }
    },
  },

  //Defining username property on User Schema
  username: {
    type: String,
    required: [true, "Username field cannot be empty"],
    trim: true,
    unique: true,
  },

  //Defining the password property on User Schema
  password: {
    type: String,
    required: [true, "Password field cannot be empty"],
    trim: true,
    minlength: [8, "Password length must me greater than 8 characters"],
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    "thisisuserverification"
  );

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  function myError(message) {
    this.message = message;
  }
  myError.prototype = new Error();

  if (!user) {
    throw new myError("Invalid Credentials");
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    return user;
  } else {
    throw new myError("Invalid Credentials");
  }
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
