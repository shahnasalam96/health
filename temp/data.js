var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PatientRegSchema = new Schema({
    firstname: String,
    lastname: String,
    dob:String,
    bloodgroup:String,
    address:String,
    emailid:string,
    username:String,
    password:String

});

// Compile model from schema
var PatientReg = mongoose.model('patientsreg', PatientRegSchema );

module.exports=PatientReg;









