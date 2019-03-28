const SomeModel=require("./data");
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require("mongoose");
const API_PORT = 5800;
const app = express();
const dbRoute = "mongodb+srv://shahnaproject:project@1@health-aoj91.mongodb.net/healthdb?retryWrites=true";

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

  let db = mongoose.connection;

    db.once("open", () => console.log("connected to the database"));
    // db.createCollection("testmongo");

    // checks if connection with the database is successful
    db.on("error", console.error.bind(console, "MongoDB connection error:"));

    app.use(bodyParser.json({limit: '10mb', extended: true}));
    app.use(bodyParser.urlencoded({limit: '10mb', extended: true, parameterLimit: 1000000}));

  
  app.post("/preg", (req, res) => {
      let data = new PatientReg();
      console.log(req.body);
       data.firstname=req.body.firstname;
       data.lastname=req.body.lastname;
       data.dob=req.body.dob;
       data.bloodgroup=req.dob.bloodgroup;
       data.address=req.body.address;
       data.emailid=req.body.emailid;
       data.username=req.body.username;
       data.password=req.body.password; 
      //code if no user with entered email was found
      data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});
  app.get("/user", (req, res) => {
  PatientReg.find((err, patientreg) => {
  console.log("PatientReg>>>>>"+JSON.stringify(patientreg));
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: patientreg });
  });
});

app.post("/update", (req, res) => {
  var data ={ 
    username:req.body.username,
    password:req.body.password 
   
  };
  PatientReg.findOneAndUpdate({ password: req.body.password },data,function(err, password){
    console.log(password);
    if(err) {
      if (err) return res.send(err);
    } else {
      return res.json({ success: true, data : data});
    }
 });
});

app.delete("/delete/:password", (req, res) => {
  console.log(req.params.password);
  PatientReg.deleteOne({ password: req.params.password}, err => {
    
          if (err) return res.send(err);
          return res.json({ success: true });
        });   
    
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
