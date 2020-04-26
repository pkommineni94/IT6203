const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
// const carrentalschema = new mongoose.Schema({
//   fromLocation: { type: String, required: true },
//   toLocation: { type: String, required: true }

// });

const carrentalschema = new mongoose.Schema({
  carModel: { type: String, required: true },
  carType: { type: String, required: true },
  availabilityStart: { type: String, required: true },
  availabilityEnd: { type: String, required: true }
});

module.exports = mongoose.model('Carrental', carrentalschema, 'CarRental');
//note capital S in the collection name
