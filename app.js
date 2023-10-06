const express = require("express");
const app = express();
const trainrouter = require("./routes/trainrouter");
app.use(helmet());
app.use(express.json());
app.use(xss());
app.use("/train", trainrouter);
module.exports = app;
