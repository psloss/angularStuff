
// read mongodb datafile and convert data to JSON format
var mongojs=require('mongojs');
var db = mongojs('planedata', ['flightlog']);
var stringify = require('json-stringify');
var doc =[];

db.flightlog.find(function(err, docs) {
  if (err) console.log(err);
  doc = stringify(docs);
//  console.log(answ);
  module.exports.doc=doc;
});
