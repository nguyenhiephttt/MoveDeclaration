var app = angular.module('indexApp', []);
app.controller('indexCtrl', function ($scope, $http) {

    document.getElementById("inputform").style.display = "none";
    document.getElementById("table").style.display = "none";

    ///company
    $http({
        method: "GET",
        url: "http://localhost:8086/Companys"
    }).then(function mySuccess(response) {
        $scope.Companys = response.data;
    }, function myError(response) {
        $scope.Companys = response.statusText;
    });

    $http({
        method: "GET",
        url: "http://localhost:8086/Provinces"
    }).then(function mySuccess(response) {
        $scope.Provinces = response.data;
    }, function myError(response) {
        $scope.Provinces = response.statusText;
    });

    // $scope.idCompany = "1";

    $scope.check = function (uniqueidEmployee) {
        $http({
            method: "GET",
            url: "http://localhost:8086/employee/" + uniqueidEmployee
        }).then(function mySuccess(response) {
            var idtemp;
            $scope.employee = response.data;
            if ($scope.employee == 0) {
                alert("Unique ID does not exist");
            }
            else {
                angular.forEach($scope.employee, function (item) {
                    $scope.fullname = item.nameEmployee;
                    $scope.departmnet = item.departmentEmployee;
                    $scope.address = item.addressEmployee;
                    $scope.idCompany = item.company.nameCompany;
                })
                document.getElementById("inputform").style.display = "block";
                document.getElementById("table").style.display = "block";
            }
        }, function myError(response) {
            $scope.employee = response.statusText;
        });
    }

    var arraytable = [];
    $scope.submitform = function (idProvince, datestart, dateend) {
        if (datestart > dateend) {
            alert("Start day cannot be greater than End day");
        }
        else {
            var arrayta = [];
            arrayta.idProvince = idProvince;
            arrayta.datestart = datestart;
            arrayta.dateend = dateend;
            arraytable.push(arrayta);
            // CLEAR TEXTBOX.
            $scope.idProvince = null;
            $scope.datestart = null;
            $scope.dateend = null;
        }
        console.log(arraytable);
    }

    $scope.submittable = function () {
        var arrMovie = [];
        angular.forEach(arraytable, function (value) {
            arrMovie.push('idProvince:' + value.idProvince + ', datestart:' + value.datestart + ', dateend:' + value.dateend);
        });
        console.log(arrMovie);
    }
})