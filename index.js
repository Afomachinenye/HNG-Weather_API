const express = require("express");
require("dotenv").config();
const requestIp = require("request-ip");
const indexRoute = require("./route");

const app = express();
app.use(requestIp.mw());

app.use("/api/hello", indexRoute);

app.get("/", (req, res) => {
  res.json("Homepage, Welcome!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
