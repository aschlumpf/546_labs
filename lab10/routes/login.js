const express = require("express");
const users = require("./users");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/", async (req, res) => {
    const username = req.body.username;
    const hash = await bcrypt.hash(req.body.password, 16);
    let user;
    for (let i = 0; i < users.length; i++) {
        const equal = await bcrypt.compare(req.body.password, users[i].hashedPassword);
        if (users[i].username === username && equal) {
            user = users[i];
            break;
        }
    }
    if (user) {
        req.session.user = user.username;
        req.session.valid = true;
        res.redirect("/private");
    }
    else {
        res.status(401).render("index", {invalid: true});
    }
});
module.exports = router;