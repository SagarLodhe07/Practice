const idea_control =require('../Controller/control')


module.exports = (app) => {
  app.get("ideaApp/api/v1/ideas",idea_control.getIdea);
};
