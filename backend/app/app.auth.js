import passport from "passport";

import config from "./app.config";
import security from "./helpers/security";
// import GooglePassport from "passport-google-oauth20";
var LocalStrategy = require("passport-local").Strategy;

const users = [];

const getUser = (name) => {
  const user = { name, id: name, email: `${name}@email.com`, password: name };
  users.push(user);

  return user;
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "name",
    },
    function (name, password, done) {
      const user = getUser(name);

      try {
        return done(null, user);
      } catch (e) {
        done(e);
      }
    }
  )
);
// passport.use(
//   new GooglePassport.Strategy(
//     {
//       clientID: config.GOOGLE_CLIENT_ID,
//       clientSecret: config.GOOGLE_SECRET,
//       callbackURL: config.GOOGLE_CALLBACK_URL,
//     },
//     (accessToken, refreshToken, profile, cb) => {
//       const user = security.adaptGoogleUser(profile);

//       if (!security.hasValidEmailDomain(user.email)) {
//         return cb(new Error(`E-mail "${user.email}" has invalid domain.`));
//       }

//       return cb(undefined, user);
//     },
//   ),
// );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const auth = {
  initialize: () => passport.initialize(),
  session: () => passport.session(),
};

module.exports = auth;
