const express = require("express");
const trainrouter = express.Router();
const authcontroller = require("../controller/authcontroller");
const traincontroller = require("../controller/traincontroller");
trainrouter.route("/register").post(authcontroller.signup);
module.exports = trainrouter;
