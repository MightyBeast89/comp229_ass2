let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class/schema
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

//contactmodel to create new contact
module.exports = mongoose.model("Contact", contactModel);
