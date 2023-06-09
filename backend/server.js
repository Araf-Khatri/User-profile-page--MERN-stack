const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./../config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 3090;
app.listen(port, () => {
  console.log("server running on port", port);
});
