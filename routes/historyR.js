const router = require("express").Router();
let History = require("../models/history");

router.route("/add").post((req, res) => {
  // body
  console.log("<<<<<< History Add >>>>>>");
  const result = req.body.result;

  const newHistory = new History({
    result,
  });

  newHistory
    .save()
    .then(() => {
      // sending a msg to front end in json Format
      res.json("History added ");
    })
    .catch((err) => {
      // Display the error
      console.log(err);
    });
});

// To get data from data base
router.route("/").get((req, res) => {
  console.log("<<<<<< Get All Histories >>>>>>");
  History.find()
    .then((history) => {
      res.json(history);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
