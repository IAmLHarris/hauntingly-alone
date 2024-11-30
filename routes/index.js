const routes = require("express").Router();

routes.use("/users", require("./users"));

routes.get("/", (req, res) => {
  // #swagger.tags=['Hello World']
  res.send("Database");
});

routes.use("/users", require("./users"));

module.exports = routes;
