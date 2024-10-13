const mongoose = require("mongoose");
const { connect, Schema, model } = mongoose;

const mongoDB = () =>
  connect("mongodb://127.0.0.1:27017/Users1").then(() =>
    console.log(`Database Connected`)
  );

const userSchema = new Schema({
  name: String,
  rollNo: Number,
  university: String,
});

const User = model("User", userSchema);

const newUser = new User({
  name: "Hussnain",
  rollNo: 1658,
  university: "UAF",
});

newUser.save();
module.exports = mongoDB;
