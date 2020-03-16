const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const vacationPackages = [     
    { "id" : "1", "from" : "ATLANTA" , "to" : "NASHVILLE" },     
    { "id" : "2", "from" : "ATLANTA" , "to" : "CHATTANOOGA" },
    {"id" : "3", "from" : "MIAMI" , "to" : "KEYWEST" }
];


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {   
    console.log('This line is always called');   
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host   
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); //allowable methods   
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');   
    next();
});


app.get('/vacation-package', (req, res, next) => {  
    
        //send the array as the response    
        res.json(vacationPackages);
})

//serve incoming post requests to /students
app.post('/vacation-package', (req, res, next) => {  
    const vacationPackage = req.body;  
    console.log(vacationPackage.from + " " + vacationPackage.to);
    
    var availablePackages = vacationPackages.filter(pkg => pkg.from == vacationPackage.from);
    //sent an acknowledgment back to caller   
    //res.status(201).json('Post successful');
    res.status(200).json(availablePackages);
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });

//to use thids middleware in other parts of the application
module.exports = app;