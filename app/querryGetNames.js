/**
 * Created by psloss on 11/7/2014.
 */
// read mongodb datafile and convert data to JSON format
var mongojs=require('mongojs', ['flightlog']);
var db = mongojs('planedata', ['flightlog']);
var stringify = require('json-stringify');


var d = db.flightlog.findOne(function(err, docs) {
  var doc = stringify(docs);
    console.log(doc);
});

