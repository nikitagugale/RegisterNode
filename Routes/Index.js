var express = require('express');
const app = express();
var path = require('path'); 
const user = require('./DB/Login');
//var tnx = require('./Transcation/Tnx.js');
//console.log(user.sed);
app.use(require('./DB/Login'));
app.use(require('./Transaction/Tnx'));

app.get("/", (req,res) =>{
  res.render("Main");
})

app.get("/login", (req,res) =>{
    res.render("Login");
  })
app.get("/signup", (req,res) =>{
    res.render("SignUp");
  })
app.get("/dasA", (req,res) =>{
  suser = req.session;
  suser = userl;
  console.log("dashA is called");
   res.render("DasA",{suser});
  })
app.get("/dasI", (req,res) =>{
  suser = req.session;
  suser = userl;
  res.render("DasI",{suser});
})
app.get("/transactionI", (req,res,user) =>{
  suser = req.session;
  console.log(user.userl)
  suser = user.userl;
  res.render("TransactionI",{suser});
   
})


module.exports = app
