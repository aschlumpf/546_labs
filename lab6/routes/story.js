const express = require("express");
const router = express.Router();
const data = require("../data");
const storyData = data.story;

router.get("/", async (req, res) => {
  try {
    res.json(storyData);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  // Not implemented
  res.status(501).send();
});

module.exports = router;