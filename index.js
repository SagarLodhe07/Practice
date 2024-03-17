const express = require("express");
const app = express();

require("./Router/route")(app);
app.listen(8000, () => {
  console.log("Connected to server");
});
