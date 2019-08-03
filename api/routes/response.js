const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", function(req, res) {
    res.json({
        firstName: "Miguel",
        lastName: "Yurivilca"
    });
});

module.exports = router;
3