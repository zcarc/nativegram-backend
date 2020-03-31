import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import passport from 'passport';
import JwtStrategy from 'passport-jwt';

const jwtOptions = {
    jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secret: process.env.JWT_SECRET
}

const verifyUser = (payload, done) => {
  try {
  } catch (e) {
    console.error(e);
  }
};

passport.use(new JwtStrategy(jwtOptions, verrifyUser));

// https://randomkeygen.com/