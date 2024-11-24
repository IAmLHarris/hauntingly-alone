const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  favoriteColor: { type: String },
  birthday: { type: String },
});

module.exports = mongoose.model("Posts", postSchema);
