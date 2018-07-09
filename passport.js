const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStategy = require("passport-local").Strategy;
const { JWT_SRCRET } = require('./configuration');
const User = require('./models/user');

// 使用的 时候 , passport.authenticate('jwt',,
// 注意  jwt  是小写的.. 
// JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SRCRET
}, async(payload, done) => {
    try {
        // Find the user specified in token
        const user = await User.findById(payload.sub);

        // If user doesn't exists, handle it
        if (!user) {
            return done(null, false);
        }


        //Otherwise, return the user

        done(null, user);

        /// 

    } catch (error) {
        done(error, false);
    }
}));


// LOCAL  STRATEGY

passport.use(new LocalStategy({
    usernameField: 'email'

}, async(email, password, done) => {
    try {
        // Find the user given the email
        const user = await User.findOne({ email });
        // If not, hand it
        if (!user) {
            return done(null, false);
        }
        // Check if the password is correct
        // const isMatch = user.isValidPassword(password);
        const isMatch = user.isValidPassword(password);

        // If not, handle it 

        if (!isMatch) {
            return done(null, false);
        }


        //  Otherwise, return the user 
        done(null, user);

    } catch (error) {
        done(error, false);
    }

}))