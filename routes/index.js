const routes = require("express").Router();

const Post = require("../data/post");

routes.get("/", (req, res) => {
  res.send("Database");
});

routes.use("/users", require("./users"));

module.exports = routes;
