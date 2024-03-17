const ideas = require("../Models/model");

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
