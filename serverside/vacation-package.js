const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
dataBaseConfig = require('./database/db');

const vacationPackage = require('./models/vacationPackage');
const tripReservation = require('./models/tripReservation');

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database connected sucessfully ')
},
  error => {
    console.log('Could not connected to database : ' + error)
  }
)


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('This line is always called');
  res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host   
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods   
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

app.get('/vacation-package', (req, res, next) => {

  vacationPackage.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

app.get('/vacation-package-reservations', (req, res, next) => {
  tripReservation.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

app.get('/vacation-package/:id', (req, res, next) => {
  vacationPackage.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

//serve incoming post requests to /vacation packages
app.post('/vacation-package-search', (req, res, next) => {
  const vacation_Package = req.body;
  console.log(vacationPackage.from + " " + vacationPackage.to);

  var availablePackages = vacationPackage.filter(pkg => pkg.from == vacation_Package.from);
  //sent an acknowledgment back to caller   
  //res.status(201).json('Post successful');
  res.status(200).json(availablePackages);
});

// Add reservation
app.post('/vacation-package-reservation', (req, res, next) => {
  console.log("adding trip reservation to db");
  req.body['total_price'] = req.body.number_of_guests * 100;
  //req.body['package_code'] = "ATLMIA5";
  tripReservation.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(201).json(data)
    }
  })
});

//id is a dynamic parameter that will be extracted from the URL
app.delete("/vacation-package-reservation/:id", (req, res, next) => {
  tripReservation.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

//to use thids middleware in other parts of the application
module.exports = app;