/**
 * Created by psloss on 11/5/2014.
 */
<script src=
var stringify = require('json-stringify');

//var datainterface = angular.module('connector', []);

var index = ""
var mongojs = require('mongojs', ['flightlog']);

var db = mongojs('planedata', ['flightlog']);

angular.module('datainterface', {})
    .controller('PlaneLogCtrl', [
        '$scope',
    function($scope){
      $scope.test = "test info";
}]);

/*    $scope.flights =[
 {
 "_id": "545163fdecf44af8e066f518",
 "id": 297,
 "flt_date": "2014-08-13 00:00:00",
 "hobbs_out": 950.4,
 "hobbs_in": 951,
 "fuel_out": 81.3,
 "fuel_in": 107.9,
 "fuel_purch": 37.8,
 "fuel_cost": 5.25,
 "oil_added": 0,
 "oil_dipstick": 10,
 "oil_change": 0,
 "comment": "Mms for fuel."
 }]  */


 /*   db.flightlog.find({hobbs_out: {$gt:952}}).toArray(function(err, docs){
        if (!docs) {
            return;
        }
        else
            var c = stringify(docs);
        console.log(c);
    }]);

/*db.flightlog.find({hobbs_out: {$gt:952}}).toArray(function(err, docs){
    if (!docs) {
        return;
    }
    else
        var c = stringify(docs);
    console.log(c);
})

/*function getNames() {
 db.collection.find().toArray(function(data, err) {
 if (err)
 //do something
 else
 res.send(data);
 });
 }

// from app.js
 angular.module('planeLog', [])
 .controller('MainCtrl', [
 '$scope',
 function($scope){

 /*$scope.flights =[