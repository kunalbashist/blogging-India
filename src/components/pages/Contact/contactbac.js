const express =require("express");
const app=express();
const path=require("path");

var bodyParser = require("body-parser");
var mongoose = require("mongoose")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))  

const urlencodedParser=bodyParser.urlencoded({
    extended : false
})
const { check, validationResult } = require('express-validator') 
//connecting to the mangoDb server. port used : 27017
mongoose.connect('mongodb://localhost:27017/blogging',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database")); //for checking purpose
db.once('open',()=>console.log("Connected to Database"))     //for checking purpose

                      
app.post("/response",urlencodedParser, 
    //These are the validations used as per the task provided to us.
    [ 
        check('name', 'This name must me 3+ characters long')
            .exists()
            .isLength({ min: 3 , max : 150}).isAlpha('en-US'),
        check('email', 'Email is not valid')
            .isEmail().normalizeEmail(),
         check('institute', 'Institute must me 3+ characters long')
           .exists()
            .isLength({ min: 3 , max : 150}).isAlpha('en-US'),
         check('contact', 'Contact Must be of 10 digits')
            .exists()
            .isLength({ min: 10 , max : 12}).isNumeric('en-US'),
         check('message', 'Must be of 10 Characters')
            .exists()
           .isLength({ min: 10}).isAlpha('en-US')
          
        ]
    
    ,(req,res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty())
        {
            const alert=errors.array()
            
            res.render("response",{
                alert //returning a list of arrays if any errors occours.
            })
        }
        else
        {
    var name = req.body.name;
    var email = req.body.email;
    var institute = req.body.institute;
    var contact = req.body.contact;
    var message = req.body.message;
    var data = {
        "name": name,
        "email" : email,
        "institute": institute,
        "contact" : contact,
        "message" : message
    }
    console.log(data);
    db.collection('contactus'),function(err,Collection){
        collection.insertone(data,(err,result))
    {
        if(err){
            throw err;
            console.log("error");
        }
        console.log("Record Inserted Successfully");
    }
    };

//console.log(data); //not required
res.send("Thank You for your response") //use a webpage to redirect it after the insertion of data
        }
});

