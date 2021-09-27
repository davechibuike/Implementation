const mongoose = require("mongoose");
const validator = require("validator");

const userschema = new mongoose.Schema({
    name:{
        type: String,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        validate(value){
          if(!validator.isEmail(value)){
            throw new Error("Email is invalid")
          }
        }
      },
      role: {
        type: String,
        lowercase: true,
        required: true
      },
      createdAt: {
        type: Date,
        default: new Date(),
        required: true
      },
      lastModified: {
        type: Date,
        default: new Date(),
        required: true
      },
});

const User = mongoose.model("User", userschema);

module.exports = User;