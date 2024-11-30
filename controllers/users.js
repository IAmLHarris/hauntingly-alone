const mongodb = require("../data/database");

const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  // #swagger.tags=['Users']
  /*
    #swagger.description = 'Gets all people from database and displays'
  */
  const result = await mongodb
    .getDatabase()
    .db("week1proj")
    .collection("people")
    .find();
  result.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
  });
};

const getSingle = async (req, res) => {
  // #swagger.tags=['Users']
  /*
    #swagger.description = 'Gets individual person from database based on ID and displays'
  */

  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db("week1proj")
    .collection("people")
    .find({ _id: userId });
  result.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users[0]);
  });
};

const addSingle = async (req, res) => {
  // #swagger.tags=['Users']
  /*
    #swagger.description = 'Adds individual person to database'
  */

  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const result = await mongodb
    .getDatabase()
    .db("week1proj")
    .collection("people")
    .insertOne(user);

  if (result.acknowledged) {
    res.status(204).send();
  } else {
    res.status(500).json("500 Error!");
  }
};

const updateSingle = async (req, res) => {
  // #swagger.tags=['Users']
  /*
    #swagger.description = 'Edits individual person from database'
  */
  const userId = new ObjectId(req.params.id);
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const result = await mongodb
    .getDatabase()
    .db("week1proj")
    .collection("people")
    .replaceOne({ _id: userId }, user);

  if (result.modifiedCount) {
    res.status(204).send();
  } else {
    res.status(500).json("500 Error!");
  }
};

const deleteSingle = async (req, res) => {
  // #swagger.tags=['Users']
  /*
    #swagger.description = 'Removes individual person from database'
  */
  const userId = new ObjectId(req.params.id);

  const result = await mongodb
    .getDatabase()
    .db("week1proj")
    .collection("people")
    .deleteOne({ _id: userId });

  if (result.deletedCount) {
    res.status(204).send();
  } else {
    res.status(500).json("500 Error!");
  }
};

module.exports = {
  getAll,
  getSingle,
  addSingle,
  updateSingle,
  deleteSingle,
};
