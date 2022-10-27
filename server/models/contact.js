let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let contactModel = mongoose.Schema(
  {
    contact_name: String,
    contact_number: String,
    email_address: String,
    
  },

  {
    collection: "contactdetails",
  }
);

//booksmodel to create new book more powerful than just class
module.exports = mongoose.model("Contact", contactModel);
