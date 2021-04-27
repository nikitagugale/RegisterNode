const express = require('express');
const bodyParser= require('body-parser');
const Transaction = require('./TransactionSchema.js');
var path = require('path'); 



const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/transactionI", async (req, res) => {

    const transaction = new Transaction({ 

        transactionhash: req.body.transachash,
        userid :req.session.userid,
    })
    try {
        const tr =  await transaction.save()
            console.log(tr)
            res.redirect('/transactionI')
        } catch (err){
			    console.log(err);
          err_msg = "Transaction not successfull!";
          return res.render('transactionI', { err_msg: err_msg } );
    }

})

module.exports = app