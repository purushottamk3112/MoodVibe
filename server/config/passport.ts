// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import { Strategy as LocalStrategy } from "passport-local";
// import { AuthService } from "../services/auth";

// // Google OAuth Strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       callbackURL: "/api/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         const result = await AuthService.handleGoogleUser(profile);
//         return done(null, result);
//       } catch (error) {
//         return done(error, false);
//       }
//     }
//   )
// );

// // Local Strategy for email/password
// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//     },
//     async (email, password, done) => {
//       try {
//         const result = await AuthService.loginUser(email, password);
//         return done(null, result);
//       } catch (error) {
//         return done(error, false);
//       }
//     }
//   )
// );

// // Serialize user for session
// passport.serializeUser((user: any, done) => {
//   done(null, user);
// });

// // Deserialize user from session
// passport.deserializeUser((user: any, done) => {
//   done(null, user);
// });

// server/config/passport.ts
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as LocalStrategy } from 'passport-local';
import { AuthService } from '../services/auth';
import type { User } from '../db/schema';

/* ------------------------------------------------------------------ */
/* 1.  Google OAuth                                                   */
/* ------------------------------------------------------------------ */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/api/auth/google/callback',
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const result = await AuthService.handleGoogleUser(profile);
        return done(null, result.user);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

/* ------------------------------------------------------------------ */
/* 2.  Local email/password                                           */
/* ------------------------------------------------------------------ */
passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    async (email, password, done) => {
      try {
        const result = await AuthService.loginUser(email, password);
        const user = result.user;
        if (!user) return done(null, false); // invalid creds
        return done(null, user); // ← only the user
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

/* ------------------------------------------------------------------ */
/* 3.  Session helpers                                                */
/* ------------------------------------------------------------------ */
passport.serializeUser((user: any, done) => done(null, user.id));

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await AuthService.findUserById(id);
    done(null, user ?? false);
  } catch (err) {
    done(err, false);
  }
});

export default passport;
// export default passport;
