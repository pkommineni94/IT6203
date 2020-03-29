const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let VacationPackage = new Schema({
  from: {
    type: String
  },
  to: {
    type: String
  },
  pkg_code: {
    type: String
  },
  pkg_duration_days: {
    type: Number
  },
  description: {
    type: String
  },
  price_per_person: {
    type: Number
  }
}, {
  collection: 'vacation_packages'
})

module.exports = mongoose.model('VacationPackage', VacationPackage)