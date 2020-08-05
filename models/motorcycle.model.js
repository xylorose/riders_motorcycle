const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the motorcycle model :
// the motorcycle model contains :
// manufacturer (example : Honda, Yamaha, Suzuki, Ducati...)
// displacement (example: 1000cc, 765cc or 250 cc, this variable can be just a number)
// weight
// riderId
let MotorcycleSchema = new Schema({
    manufacturer :{type: String , required: true},
    displacement:{type: Number, required: true},
    weight:{type: Number, required: true},
    riderId:{type: String, required: false}
})



// Don't forget to export the Rider model :
module.exports = mongoose.model('Motorcycle', MotorcycleSchema);
