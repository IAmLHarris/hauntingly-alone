const homeRoute = (req, res) => {
  res.send("i love all of you so much");
};

const aloneRoute = (req, res) => {
  res.send("perfectly alone");
};

module.exports = { homeRoute, aloneRoute };
