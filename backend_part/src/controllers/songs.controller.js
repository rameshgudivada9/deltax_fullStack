const express = require("express");
const Songs = require("../models/songs.model");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    let songs = await Songs.findOne({ Name: req.body.userName })
      .lean()
      .exec();

    if (songs) {
      return res
        .status(200)
        .json({
            songs
        });
    }

    songs = await Songs.create(req.body);

    return res.status(201).json({ songs });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.post("/:id", async (req, res) => {
    try {
      const songsdata = await songsdata.create({
        userId: req.params.id,
        poster: req.body.poster,
      });
      return res.status(201).send(songsdata);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });

module.exports = router;