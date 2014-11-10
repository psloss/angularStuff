var app = angular.module('main', ['ngTable']).
    controller('DemoCtrl', function($scope, ngTableParams) {
        var data = [{
        "_id": "545163fdecf44af8e066f518",
        "id": 297,
        flt_date: "2014-08-13 00:00:00",
        hobbs_out: 950.4,
        "hobbs_in": 951,
        "fuel_out": 81.3,
        "fuel_in": 107.9,
        "fuel_purch": 37.8,
        "fuel_cost": 5.25,
        "oil_added": 0,
        "oil_dipstick": 10,
        "oil_change": 0,
        "comment": "Mms for fuel."
    },
    {
        "_id": "545163fdecf44af8e066f519",
        "id": 298,
        "flt_date": "2014-08-16 00:00:00",
        "hobbs_out": 951,
        "hobbs_in": 952.8,
        "fuel_out": 107.9,
        "fuel_in": 73.6,
        "fuel_purch": 0,
        "fuel_cost": 0,
        "oil_added": 0,
        "oil_dipstick": 9,
        "oil_change": 0,
        "comment": ""
    },
    {
        "_id": "545163fdecf44af8e066f51a",
        "id": 299,
        "flt_date": "2014-08-16 00:00:00",
        "hobbs_out": 952.8,
        "hobbs_in": 954.8,
        "fuel_out": 73.6,
        "fuel_in": 75.1,
        "fuel_purch": 40.2,
        "fuel_cost": 7.9,
        "oil_added": 1,
        "oil_dipstick": 9,
        "oil_change": 0,
        "comment": ""
    },
    {
        "_id": "545163fdecf44af8e066f51b",
        "id": 300,
        "flt_date": "2014-08-17 00:00:00",
        "hobbs_out": 954.8,
        "hobbs_in": 955.2,
        "fuel_out": 75.1,
        "fuel_in": 66.5,
        "fuel_purch": 0,
        "fuel_cost": 0,
        "oil_added": 0,
        "oil_dipstick": 9,
        "oil_change": 0,
        "comment": "Flew around lake w/Bobby and little Bobby."
    },
    {
        "_id": "545163fdecf44af8e066f51c",
        "id": 301,
        "flt_date": "2014-09-06 00:00:00",
        "hobbs_out": 955.2,
        "hobbs_in": 956,
        "fuel_out": 66.5,
        "fuel_in": 68.7,
        "fuel_purch": 17.6,
        "fuel_cost": 0,
        "oil_added": 0,
        "oil_dipstick": 10.5,
        "oil_change": 0,
        "comment": ""
    },
    {
        "_id": "545163fdecf44af8e066f51d",
        "id": 302,
        "flt_date": "2014-10-04 00:00:00",
        "hobbs_out": 956,
        "hobbs_in": 957.5,
        "fuel_out": 68.7,
        "fuel_in": 36.6,
        "fuel_purch": 0,
        "fuel_cost": 0,
        "oil_added": 0,
        "oil_dipstick": 10,
        "oil_change": 0,
        "comment": "to Angola w/RMM."}];

        $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    });