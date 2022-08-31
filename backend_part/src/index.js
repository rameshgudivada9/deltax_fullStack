

const express = require("express");
const cors=require("cors")
const app = express();

app.use(express.json());
app.use(cors());
const userController = require("./controllers/user.controllers");
const posterController=require("./controllers/postercontroller");
const songsController=require("./controllers/songs.controller")
const artistController=require("./controllers/artist.controller")

app.use("/api/v1/user",userController);
app.use("/api/v1/poster",posterController);
// app.use("/api/v1/songs",songsController);
app.use("/api/v1/artist",artistController);

module.exports = app;
