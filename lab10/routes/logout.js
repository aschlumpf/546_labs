const express = require("express");
const router = express.Router();
const session = require('express-session');

router.get("/", async (req, res) => {
    req.session.destroy(err => {
        req.user = undefined;
        res.render("logout");
    })
});

module.exports = router;