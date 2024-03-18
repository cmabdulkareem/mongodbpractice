var express = require('express');
var router = express.Router();

const MongoClient=require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  console.log(req.body);

MongoClient.connect('mongodb://localhost:27017', function(err, client){
  if(err)
    console.log('error')
  else
    client.db('cadd').collection('user').insertOne(req.body)
})

  res.send("success");
});

module.exports = router;
