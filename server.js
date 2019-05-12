const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const user = require("./routes/api/user");
const db = require("./config/keys").mongoURI;
const port = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", user);

app.listen(port, () => console.log(`Server up and running on port ${port}!`));
