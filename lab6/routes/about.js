const express = require("express");
const router = express.Router();
const data = require("../data");
const aboutData = data.about;

router.get("/", async (req, res) => {
  try {
    res.json(aboutData);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  // Not implemented
  res.status(501).send();
});

module.exports = router;