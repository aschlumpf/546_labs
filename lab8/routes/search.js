const express = require("express");
const router = express.Router();
const getPeopleByName = require("../data/search").getPeopleByName;

router.post("/", async (req, res) => {
    const searchPostData= req.body;
    const { personName } = searchPostData;
    try {
        if (personName === '') {
            res.status(400).render("error");
        }
        else {
            const people = await getPeopleByName(personName);
            res.render("search", {people: people, personName: personName});
        }
    } catch(e) {
        res.status(404).json({error : "error"});
    }
});

module.exports = router;