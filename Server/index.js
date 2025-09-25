const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const port = process.env.PORT;
const mongourl = process.env.MongoURL;
// Tasks
const getTaskData = require("./Backend Management/Router/TaskRoute/getRoute/getRoute");
const addTaskData = require("./Backend Management/Router/TaskRoute/postRoute/postRoute");
const delTaskData = require("./Backend Management/Router/TaskRoute/delRoute/delRoute");
const updateTaskData = require("./Backend Management/Router/TaskRoute/updateRoute/putRoute");

//User
const getUserData = require("./Backend Management/Router/UserRoute/getRoute/getRoute");
const postUserData = require("./Backend Management/Router/UserRoute/postRoute/postRoute");
const putUserData = require("./Backend Management/Router/UserRoute/updateRoute/putRoute");
const deleteUserData = require("./Backend Management/Router/UserRoute/delRoute/delRoute");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(mongourl)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection failed:", err));

app.get("/protected", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    res.json({ message: "Protected data", user });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

// For Tasks
app.use("/task", addTaskData);
app.use("/task", getTaskData);
app.use("/task", delTaskData);
app.use("/task", updateTaskData);

//For User
app.use("/user", getUserData);
app.use("/user", postUserData);
app.use("/user", putUserData);
app.use("/user", deleteUserData);

app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});
app.listen(port, () => {
  console.log(`Running at port ${port}`);
});
