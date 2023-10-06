const mongoose = require("mongoose");
const validator = require("validator")
const userSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "A company must have a name"],
  },
  ownerName: {
    type: String,
    required: [true, "A company must have a name"],
  },
  rollno: {
    type: Number,
    unique: true,
  },
  ownerEmail: {
    type: String,
    required: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  accessCode:{
    type: String,
    required:true
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
