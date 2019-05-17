const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

require("./models/user");
require("./models/recipe");

const user = require("./routes/api/user");
const recipe = require("./routes/api/recipe");
const port = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/user", user);
app.use("/api/recipe", recipe);

app.listen(port, () => console.log(`Server up and running on port ${port}!`));
