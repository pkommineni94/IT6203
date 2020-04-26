const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
  const hotelSchema = new mongoose.Schema({
    Destination:  { type: String, required: true},
    Checkin: { type: String, required: true},
    Checkout: { type: String, required: true},
    Class:  { type: String, required: true},
    Guests:  { type: Number, required: true},
  });

//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('hotel', hotelSchema,'hotels');
//note capital S in the collection name
