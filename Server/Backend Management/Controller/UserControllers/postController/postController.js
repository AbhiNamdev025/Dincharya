const express = require("express");
const userModel = require("../../../Model/UserModel/userModel");

exports.postUser = async (req, res) => {
  try {
    const userData = await userModel.User.create(req.body);
    console.log(req.body);
    res.status(200).json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error in creating user", err);
  }
};
