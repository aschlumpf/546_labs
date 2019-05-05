const express = require("express");
const path = require("path");
// const session = require('express-session')
const router = express.Router();

router.use(async function(request, response, next) {
    if (request.session.valid) {
        next();
    }
    else {
        response.redirect("/");
    }
});
router.get("/", async (req, res) => {
    res.render("private", {user: req.session.user});
});


module.exports = router;