const express = require('express');
const mongoose = require('mongoose');
const keys=require('./config/keys');
const passport=require('passport');
const cookiesSession = require('cookie-session');
require("./models/User");
require("./services/passport");


mongoose.connect(keys.mongoconnectionstring);

const app =express();

app.use(cookiesSession({
    maxAge:30*24*60*60*1000,
    keys :[keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);




/*
app.get('/',(req,res)=>{
    res.send({Name:'Project'})
})
*/




const PORT =process.env.PORT || 5000;
app.listen(PORT);