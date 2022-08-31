const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, require: true, unique: true },
    email:{type:String}

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
