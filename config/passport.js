const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("user");
const keys = require("./keys");
const opts = {};

const GOOGLE_CLIENT_ID = "ADD_YOUR_CLIENT_ID";
const GOOGLE_CLIENT_SECRET = "ADD_YOUR_CLIENT_SECRET";

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        // User.findOrCreate({ googleId: profile.id }, function(err, user) {
        //   return done(err, user);
        // });
      }
    )
  );
};
