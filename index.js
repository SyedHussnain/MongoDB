const express = require("express");
const app = express();
const mongoDB = require("./mongoDB");
require("dotenv").config();
app.use(express.json());
mongoDB();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log(`Server is Running at PORT ${PORT}`));
