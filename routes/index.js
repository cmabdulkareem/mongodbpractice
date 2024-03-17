var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

// Define a Mongoose schema for the user
const userSchema = new mongoose.Schema({
  fname: String,
  lname: String
});

// Create a Mongoose model for the user collection
const User = mongoose.model("collection_name", userSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  console.log(req.body);

  // Connect to the MongoDB database sampledb
  mongoose.connect("mongodb://localhost:27017/sampledb", function(err){
    if (err) {
      console.log(err);
      res.status(500).send("Error connecting to the database");
    } else {
      console.log("Successfully connected to the database");

      // Create a new User document and save it to the user collection
      const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname
      });

      newUser.save((err) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error saving user data");
        } else {
          console.log("User saved successfully");
          res.send("User signed up successfully");
        }
      });
    }
  });
});

module.exports = router;
