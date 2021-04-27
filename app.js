const express = require("express");
var mongoose = require("mongoose");
//const user = require('./DB/Login.js');
const app = express();
app.set("view engine","ejs");


app.use(express.json()); // Make sure it comes back as json
const URI="mongodb+srv://admin:admin@cluster0.j0nhg.mongodb.net/User?retryWrites=true&w=majority"
mongoose.connect(URI, {useNewUrlParser: true,useUnifiedTopology: true});
var db = mongoose.connection;
     db.on('error', console.error.bind(console, 'connection error:'));
     db.once('open', ()=> {
           console.log("connected!!!");
     });
     app.use(express.static(__dirname + './Views/Images'));
     app.use(require('./Routes'));

app.listen(3000, () => { console.log('Server is running...') });




