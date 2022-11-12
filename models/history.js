const mongoose = require("mongoose");
const schema = mongoose.Schema;
var Validator = require("jsonschema").Validator;
var v = new Validator();

const historySheema = new mongoose.Schema({
  result: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const History = mongoose.model("history", historySheema);

module.exports = History;
