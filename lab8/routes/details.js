const express = require("express");
const router = express.Router();
const getPersonById = require("../data/search").getPersonById;

router.get("/:id", async (req, res) => {
    const ID = parseInt(req.params.id);
    try {
        const person = await getPersonById(ID);
        res.render("details", {person : person});
    } catch(e) {
        res.status(400).render("detailsError", {id : ID});
    }
});

module.exports = router;