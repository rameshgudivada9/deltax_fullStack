const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
  {
    Name: { type: String, require: true, unique: true },
    DOB:{type:Number},
    BIO:{type:String},
    song:[{type:String}]

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Artist = mongoose.model("artist", artistSchema);
module.exports = Artist;