const idea_model = require("../Models/model");

exports.getIdea = (request, respons) => {
  respons.status(200).send(idea_model);
};
