const routes = require("express").Router();
const excisionController = require("../controllers/excisionRoute");

routes.get("/", excisionController.aloneRoute);
routes.get("/home", excisionController.homeRoute);

module.exports = routes;
