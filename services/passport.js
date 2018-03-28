const passport = require("passport");
const Googlestrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new Googlestrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existinguser = await User.findOne({ googleId: profile.id });
      if (!existinguser) {
        const user = await new User({
          googleId: profile.id,
          userName: profile.displayName
        }).save();
        done(null, user);
      } else {
        done(null, existinguser);
      }
    }
  )
);
