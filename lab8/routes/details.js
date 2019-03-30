const express = require("express");
const router = express.Router();
const getPersonById = require("../data/search").getPersonById;

router.get("/:id", async (req, res) => {
    try {
        const ID = parseInt(req.params.id);
        const person = await getPersonById(ID);
        res.render("details", {person : person});
    } catch(e) {

    }
});

module.exports = router;