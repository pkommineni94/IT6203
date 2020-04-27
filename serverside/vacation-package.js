const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
dataBaseConfig = require('./database/db');

const vacationPackage = require('./models/vacationPackage');
const tripReservation = require('./models/tripReservation');
const CarRental = require('./models/carrental');
const Hotel = require('./models/hotel');
const Flightdata = require('./models/flightdata');




// Connecting mongoDB
// mongoose.Promise = global.Promise;
// mongoose.connect(dataBaseConfig.db, {
//   useNewUrlParser: true
// }).then(() => {
//   console.log('Database connected sucessfully ')
// },
//   error => {
//     console.log('Could not connected to database : ' + error)
//   }
// )

const uri = "mongodb+srv://traveluser:traveluser123@cluster0-gcwdh.mongodb.net/mygroupproject?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });


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

// Get single student
app.get('/vacation-package-reservations/:id', (req, res, next) => {
  tripReservation.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update student
app.put('/update-vacation-package-reservation/:id', (req, res, next) => {
  console.log(req.params)
  req.body['total_price'] = req.body.number_of_guests * 100;
  tripReservation.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Vacation Package Reservation successfully updated!')
    }
  })
})


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

// Serve incoming post requests to /carrentals
app.post('/carrentals', (req, res, next) => {

  console.log('POST NEW Success');
  const carrental = new CarRental({
      carModel: req.body.carModel,
      carType: req.body.carType,
      availabilityStart: req.body.availabilityStart,
      availabilityEnd: req.body.availabilityEnd
  });

  carrental.save()
      .then(() => { console.log('Success -- POST'); })
      .catch(err => { console.log('Error:' + err); });

});

app.get('/carrentals', (req, res, next) => {
  console.log('APP-CARS-GET');
  
  //call mongoose method find(MongoDB db.Students.find())
  CarRental.find()
      //if data is returned, send data as a response 
      .then(data => {
          console.log('Success -- GET');
          res.status(200).json(data);
      })
      //if error, send internal server error
      .catch(err => {
          console.log('Error: ${err}');
          res.status(500).json(err);
      });

});

app.put('/carrentals/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      //find a document and set new first and last names
      CarRental.findOneAndUpdate({ _id: req.params.id },
          {
              $set: {
                  carModel: req.body.carModel,
                  carType: req.body.carType,
                  availabilityStart: req.body.availabilityStart,
                  availabilityEnd: req.body.availabilityEnd
              }
          }, { new: true })
          .then((car) => {
              if (car) { //what was updated
                  console.log('Success -- UPDATED');
              } else {
                  console.log("no data exist for this id");
              }
          })
          .catch((err) => {
              console.log(err);
          });
  } else {
      console.log("please provide correct id");
  }
});

app.delete("/carrentals/:id", (req, res, next) => {
  console.log('CARS-- DELETED');

  CarRental.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json("Deleted!");
  });

});

// Hotels

app.get('/hotelsdata', (req, res, next) => {
  console.log('HOTELS--GET--SUCCESS');
  //call mongoose method find (MongoDB db.hotel.find())
  Hotel.find() 
  //if data is returned, send data as a response 
  .then(data => res.status(200).json(data))
  //if error, send internal server error
  .catch(err => {
  console.log('Error: ${err}');
  res.status(500).json(err);
});
});


// serve incoming post requests to /paymentMethods
app.post('/hotelsdata', (req, res, next) => {
  console.log('HOTELS--POST--SUCCESS');
  const hotel = new Hotel({
    Destination: req.body.Destination,
    Checkin: req.body.Checkin,
    Checkout: req.body.Checkout,
    Class: req.body.Class,
    Guests: req.body.Guests

  });
  //send the document to the database 
  hotel.save()
    //in case of success
    .then(() => { console.log('Success');})
    //if error
    .catch(err => {console.log('Error:' + err);});
    res.status(201).json('Post successful');
  });

   // serve incoming put requests to /students
   app.put('/hotelsdata/:id', (req, res, next) => {
    console.log("HOTELS--UPDATE: " + req.params.id)
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      //find a document and set new first and last names
      Hotel.findOneAndUpdate({_id: req.params.id},
        {$set:{Destination : req.body.Destination,
          Checkin: req.body.Checkin,
          Checkout: req.body.Checkout,
          Class: req.body.Class,
          Guests: req.body.Guests}},{new:true}) 
       .then((hotel) => {
          if (hotel) { //what was updated
            console.log(hotel);
          } else {
            console.log("no data exist for this id");
          }
       })
      .catch((err) => {
        console.log(err);
       });
   } else {
     console.log("please provide correct id");
   }
    
  });  

  app.delete("/hotelsdata/:id", (req, res, next) => {
    console.log("HOTELS--DELETE");
    Hotel.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json("Deleted!");
    });
});

// Serve incoming post requests to /carrentals
app.post('/flightsdata', (req, res, next) => {
  console.log('Flights -- Success -- POST');

  console.log(req.body.From);
  console.log(req.body.Towhere);
  console.log(req.body.Trip);
  console.log(req.body.Depart);
  console.log(req.body.Travelreturn);
  console.log(req.body.people);

  const flightdata = new Flightdata({
    From: req.body.From,
    Towhere: req.body.Towhere,
    Trip: req.body.Trip,
    Depart: req.body.Depart,
    Travelreturn: req.body.Travelreturn,
    people: req.body.people
  });

  flightdata.save()
      .then(() => { console.log('Success -- POST'); })
      .catch(err => { console.log('Error:' + err); });
});

app.get('/flightsdata', (req, res, next) => {
  Flightdata.find()
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log(`An Error occured. ${err}`);
      res.status(500).json(err);
    });

});

app.delete("/flightsdata/:id", (req, res, next) => {
  console.log("abcd");
  Flightdata.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");

  });

});

 // serve incoming put requests to /students
 app.put('/flightsdata/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new first and last names
    Flightdata.findOneAndUpdate({_id: req.params.id},
      {$set:{
  From: req.body.From,
  Towhere: req.body.Towhere,
  Trip: req.body.Trip,
  Depart: req.body.Depart,
  Travelreturn: req.body.Travelreturn,
  people: req.body.people
      }},{new:true}) 
     .then((flightdata) => {
        if (flightdata) { //what was updated
          console.log(student);
        } else {
          console.log("no data exist for this id");
        }
     })
    .catch((err) => {
      console.log(err);
     });
 } else {
   console.log("please provide correct id");
 }
  
});  



//to use thids middleware in other parts of the application
module.exports = app;