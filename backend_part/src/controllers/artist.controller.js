const express = require("express");
const Artist = require("../models/artist.model");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    let artist = await Artist.findOne({ Name: req.body.userName })
      .lean()
      .exec();

    if (artist) {
      return res
        .status(200)
        .json({
            artist
        });
    }

    artist = await Artist.create(req.body);

    return res.status(201).json({ artist });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
router.get("/", async (req, res) => {
    try {
      const Artistdata = await Artistdata
        .find({})
        .populate({ path: "userId", select: { Name: 1 } })
        .lean()
        .exec();
      return res.status(201).send(Artistdata);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });

module.exports = router;