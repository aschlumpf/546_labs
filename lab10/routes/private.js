const express = require("express");
const path = require("path");
const users = require("./users");
const router = express.Router();

router.use(async function(request, response, next) {
    if (request.session.valid) {
        next();
    }
    else {
        response.status(403).render("notlogged");
        // response.redirect("/");
    }
});
router.get("/", async (req, res) => {
    const user = users.filter(u => u.username === req.session.user)[0];
    const userInfo = {
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            bio: user.bio,
            profession: user.profession
    }
    res.render("private", {user: userInfo});

});


module.exports = router;