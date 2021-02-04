var app = angular.module('indexApp', []);
app.controller('indexCtrl', function ($scope, $http) {

    ///company
    $http({
        method: "GET",
        url: "http://192.168.2.12:8086/Companys"
    }).then(function mySuccess(response) {
        $scope.Companys = response.data;
    }, function myError(response) {
        $scope.Companys = response.statusText;
    });


    // $scope.idCompany = "1";

    $scope.check = function (idCompany,empcodeEmployee,smcEmployee) {
        $http({
            method: "GET",
            url: "http://192.168.2.12:8086/employee/" + idCompany + "/" + empcodeEmployee + "/" + smcEmployee
        }).then(function mySuccess(response) {
            $scope.employee = response.data;
            if ($scope.employee == 0) {
                alert("Không tồn tại nhân viên / Does not exist");
            }
            else {
                window.location.assign('http://127.0.0.1:5500/view/medicaldeclaration.html?em='+ empcodeEmployee);
                window.localStorage.setItem("empcode",empcodeEmployee);
            }
        }, function myError(response) {
            $scope.employee = response.statusText;
        });
    }
})