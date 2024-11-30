const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "LC API Testing",
    description: "Friend API",
  },
  host: "localhost:3000",
  schemes: ["http", "https"],
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js", "./routes/users.js"];

swaggerAutogen(outputFile, routes, doc).then(() => {
  require("./server.js"); // Your project's root file
});
