import passport from "passport";

import config from "./app.config";
import security from "./helpers/security";
// import GooglePassport from "passport-google-oauth20";
var LocalStrategy = require("passport-local").Strategy;

const users = [
  { id: "neo", email: "email1@email.com", name: "neo", password: "neo" },
  {
    id: "trinity",
    email: "email2@email.com",
    name: "trinity",
    password: "trinity",
  },
  {
    id: "morpheu",
    email: "email3@email.com",
    name: "morpheu",
    password: "morpheu",
  },
  {
    id: "sentinela",
    email: "email4@email.com",
    name: "sentinela",
    password: "sentinela",
  },
  { id: "smith", email: "email5@email.com", name: "smith", password: "smith" },
];

const getUser = (name) => {
  const user = users.find((user) => user.name === name);
  if (user) {
    return user;
  } else {
    return undefined;
  }
};
passport.use(
  new LocalStrategy(
    {
      usernameField: "name",
    },
    function (name, password, done) {
      const user = getUser(name);

      if (!user) {
        return done(null, false, { message: "no user" });
      }
      try {
        if (user.password === password) {
          console.log("teste", user);

          return done(null, user);
        } else {
          return done(null, false, { message: "password incorrect" });
        }
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
