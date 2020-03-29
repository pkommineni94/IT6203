const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let TripReservation = new Schema({
  
  package_code: {
    type: String
  },
  primary_contact_firstName: {
    type: String
  },
  primary_contact_lastName: {
    type: String
  },
  phone: {
      type: String
  },
  email : {
      type: String
  },
  
  dob : {
    type: Date
  },
  gender : {
    type: String
  },
  number_of_guests : {
    type: Number
  },
  additional_information: {
    type: String
  },
  total_price: {
    type: Number
  }
}, {
  collection: 'trip_reservation'
})

module.exports = mongoose.model('TripReservation', TripReservation)