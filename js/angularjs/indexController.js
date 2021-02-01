var app = angular.module('indexApp', []);
app.controller('indexCtrl', function ($scope, $http) {

    document.getElementById("inputform").style.display = "none";

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
            }
        }, function myError(response) {
            $scope.employee = response.statusText;
        });
    }

    $scope.submitform = function (idProvince, datestart, dateend) {
        if (datestart > dateend) {
            alert("Start day cannot be greater than End day");
        }
        else{
            
        }
    }
})