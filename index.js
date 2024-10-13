const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log(`Server is Running at PORT ${PORT}`));
