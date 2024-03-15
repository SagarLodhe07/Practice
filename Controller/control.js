const ideas = require("../Models/model");

exports.getIdea = (request, res) => {
  res.status(200).send(ideas);
};
