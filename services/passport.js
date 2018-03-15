
const passport = require('passport');
const Googlestrategy = require('passport-google-oauth20').Strategy;
const keys=require('../config/keys');
const mongoose = require('mongoose');

const User=mongoose.model('users')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
     User.findById(id)
        .then(user=>(
            done(null,user)))
})

passport.use(new Googlestrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
},(accessToken,refreshToken,profile,done)=>{
    console.log(profile)
    User.findOne({
        googleId:profile.id
    })
    .then(existinguser=>{
        if(!existinguser)
        {
            new User({
                googleId:profile.id,
                userName:profile.displayName
            }).save()
            .then(user=>{
                done(null,user)
            }

            )
        }
        else
        {
            done(null,existinguser)
        }

    })


   
}
));