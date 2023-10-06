const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/affordmed";
const connectotmongo = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log("Connected to Database");
    });
};
module.exports = connectotmongo;
