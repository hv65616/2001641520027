const catchasync = require("../utils/catchAsync");
const apperror = require("../utils/appError");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/user");

const signup = catchasync(async (Req, res, next) => {
  const newuser = await User.create({
    companyName: req.body.companyName,
    ownerName: req.body.ownerName,
    rollno: req.body.rollno,
    ownerEmail: req.body.ownerEmail,
    accessCode: req.body.accessCode,
  });
  const payload = { id: newuser._id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  const cookieoptions = {
    expiresIn: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("jwt", token, cookieoptions);
  res.status(201).json({
    status: "Success",
    token,
    data: {
      user: newuser,
    },
  });
});

module.exports = { signup };
