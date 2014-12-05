/**
 * Created by psloss on 11/21/2014.
 */
var doc=require('./app/querryGetNames');
var x =[
    {person: "poco ", "age": 60},
    {person: "Lynes ", "age": 59}
]
var y = [
    {
        "_id": "545163fdecf44af8e066f465",
        "id": 115,
        "flt_date": "2012-01-01 00:00:00",
        "hobbs_out": 705.7,
        "hobbs_in": 708.7,
        "fuel_out": 114,
        "fuel_in": 64,
        "fuel_purch": 39.7,
        "fuel_cost": 0,
        "oil_added": 0,
        "oil_dipstick": 0,
        "oil_change": 0,
        "comment": ""
    },
    {
        "_id": "545163fdecf44af8e066f466",
        "id": 116,
        "flt_date": "2012-01-06 00:00:00",
        "hobbs_out": 708.7,
        "hobbs_in": 709.3,
        "fuel_out": 64,
        "fuel_in": 51,
        "fuel_purch": 0,
        "fuel_cost": 0,
        "oil_added": 0,
        "oil_dipstick": 0,
        "oil_change": "NULL",
        "comment": "NULL"
    }]
console.log("x type is: " + typeof x);
console.log(" x " + x[1].person + x[0].age);
console.log("y " + y[1].fuel_in, y[1].flt_date);
console.log("typeof docs: " + typeof doc);
console.log("docs: " + doc);
doc.forEach(function(value){
    console.log(value);
});