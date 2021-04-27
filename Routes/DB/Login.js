const express = require('express');
/*const flash = require('express-flash-notification');*/
const bodyParser= require('body-parser');
const bcrypt = require('bcrypt')
const User = require('./User.js');
var path = require('path'); 
var cookieParser = require('cookie-parser');
var session = require('express-session');
const user = require('./User.js');
/*const user = require('./User.js');*/
const app = express();


app.use(express.static("Views/Images"));
app.use(cookieParser());

app.use(session({secret: "Your secret key",resave: false,
saveUninitialized: true,
cookie: { secure: true }}));

var userl;
var sed = 0000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
app.use(function(req, res, next) {
  res.locals.user = req.session.user;
  next();
});*/

app.post("/login", async (req, res) => {
  suser = req.session;
  
    userl = await User.findOne({ username: req.body.username});
    if (userl) {
      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(req.body.password, userl.password);
      if (validPassword) {
        suser = userl;
        if(userl.role == "admin"){  res.render('./dasA');}
        else if(userl.role== "investor"){ res.render('./dasI');}
      } 
    else {
      err_msg = "Seem like you don't have account.Please signup.";
      return res.render('Login', { err_msg: err_msg } );
        }
    }
    
})




  
app.post('/signup', async(req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new User({ 
            firstname: req.body.firstname, 
            lastname: req.body.lastname, 
            username: req.body.username, 
            password: hashedPassword ,
            role: req.body.role,})
        try {
        const u1 =  await user.save()
            console.log(u1)
            res.redirect('/login')
        } catch (err){
			    console.log(err);
          err_msg = "Seems like already have account with above mailid. Login or use different mailid!!";
          return res.render('signup', { err_msg: err_msg } );
    }
    
})


module.exports = app, userl, sed


