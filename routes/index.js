var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  console.log(req.body);

// Connect to the db
mongoose.connect("mongodb://localhost:27017/latestdb",{
  useNewUrlParser:true, useUnifiedTopology:true
},(err)=>{
  if(err){
    console.log(err)
  }else{
    console.log("succesfully connected")
  }
})

  res.send("success");
});

module.exports = router;
