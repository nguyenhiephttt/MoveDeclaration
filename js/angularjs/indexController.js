var app = angular.module('indexApp', []);
app.controller('indexCtrl', function ($scope, $http) {

    ///company
    $http({
        method: "GET",
        url: "http://localhost:8086/Companys"
    }).then(function mySuccess(response) {
        $scope.Companys = response.data;
    }, function myError(response) {
        $scope.Companys = response.statusText;
    });


    // $scope.idCompany = "1";

    $scope.check = function (idCompany,empcodeEmployee,smcEmployee) {
        $http({
            method: "GET",
            url: "http://localhost:8086/employee/" + idCompany + "/" + empcodeEmployee + "/" + smcEmployee
        }).then(function mySuccess(response) {
            $scope.employee = response.data;
            if ($scope.employee == 0) {
                alert("Does not exist");
            }
            else {
                alert("ok");
            }
        }, function myError(response) {
            $scope.employee = response.statusText;
        });
    }

    // var arraytable = [];
    // $scope.submitform = function (idProvince, datestart, dateend) {
    //     if (datestart > dateend) {
    //         alert("Start day cannot be greater than End day");
    //     }
    //     else {
    //         var arrayta = [];
    //         arrayta.idProvince = idProvince;
    //         arrayta.datestart = datestart;
    //         arrayta.dateend = dateend;
    //         arraytable.push(arrayta);
    //         // CLEAR TEXTBOX.
    //         $scope.idProvince = null;
    //         $scope.datestart = null;
    //         $scope.dateend = null;
    //     }
    //     console.log(arraytable);
    // }

    // $scope.submittable = function () {
    //     var arrMovie = [];
    //     angular.forEach(arraytable, function (value) {
    //         arrMovie.push('idProvince:' + value.idProvince + ', datestart:' + value.datestart + ', dateend:' + value.dateend);
    //     });
    //     console.log(arrMovie);
    // }
})