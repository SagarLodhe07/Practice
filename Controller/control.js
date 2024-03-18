const ideas = require("../Models/model");

let id = 4;
exports.getIdea = (request, res) => {
  res.status(200).send(ideas);
};

exports.getallId = (req, res) => {
  idea_id = req.params.id;

  if (ideas[idea_id]) {
    res.status(200).send(ideas[idea_id]);
  } else {
    res.status(404).send({
      message: "Id Not Found",
    });
  }
};

exports.createIdeas = (req, res) => {
  idea_object = req.body;
  id++;
  ideas_object["id"] = id;
  ideas[id] = idea_object;
  res.status(201).send(idea_object);
};
