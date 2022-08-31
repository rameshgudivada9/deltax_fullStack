const mongoose = require("mongoose");

const songsSchema = new mongoose.Schema(
  {
    songName: { type: String, require: true, unique: true },
    relese:{type:Number},
    img:{type:String},
    artist:[{type:String}]

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const songs = mongoose.model("song", songsSchema);
module.exports = songs;