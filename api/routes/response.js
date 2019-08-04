const express = require("express");
const router = express.Router();


const ListPersons = [];
const Person = {
  firstName: "Miguel",
  lastName: "Yurivilca"
};
const Person2 = {
  firstName: "Migasuel",
  lastName: "ass"
};
ListPersons.push(Person);
ListPersons.push(Person2);
router.get("/", function(req, res) {
  res.json(ListPersons);
});

router.post("/person", function(req, res) {
  ListPersons.push(req.params);
});
module.exports = router;
