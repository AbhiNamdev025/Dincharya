const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const mongourl = process.env.MongoURL;

const getTaskData = require("./Backend Management/Router/getRoute/getRoute");
const putTaskData = require("./Backend Management/Router/postRoute/postRoute");
const delTaskData = require("./Backend Management/Router/delRoute/delRoute");
const updateTaskData = require("./Backend Management/Router/updateRoute/putRoute");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(mongourl)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection failed:", err));

app.use("/task", putTaskData);
app.use("/task", getTaskData);
app.use("/task", delTaskData);
app.use("/task", updateTaskData);
app.listen(port, () => {
  console.log("Running at port 2525");
});
