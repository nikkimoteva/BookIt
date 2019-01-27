var express = require('express');
var router = express.Router();

var Building = "Life Sciences"
var percentDevices = 51




/* GET home page. */
router.get('/', function(req, res, next) {    
  res.render('index', { title: 'Booking', available: true, hours: 60, name: 'bob'});
 });

router.post('/reserve', function(req, res, next) {
  console.log("not");
  //logic connecting to db
  res.send('/');
});

function occupied() {
  if(percentDevices<0) {
    return "Error"
  } else if (percentDevices >= 100) {
    return "Building is full, you will not find a seat"
  } else if (75 <= percentDevices && percentDevices <= 99) {
    return "Very busy, you might not find a seat"
  } else if (51 <= percentDevices && percentDevices <= 74) {
    return "Fairly busy, you might find a seat"
  } else if (26 <= percentDevices && percentDevices <= 50) {
     return "Fairly empty, you will find a seat"
  } else if (percentDevices <= 26) {
    return "Almost empty, you will find a seat"
  }
}

router.get('/view_rooms', function(req, res, next) {
  res.render('view_rooms', { title: 'Where to Study', Building : Building, percentDevices: percentDevices, Occupation: occupied()
 });
 //res.redirect('/');
});




router.post('/', function(req, res, next) {
  console.log("not");
  //logic connecting to db
  res.send('/view_rooms');
});

module.exports = router;
