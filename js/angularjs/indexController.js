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
})