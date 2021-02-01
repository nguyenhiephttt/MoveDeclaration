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
        url: "http://localhost:8086/Companys"
    }).then(function mySuccess(response) {
        $scope.Companys = response.data;
    }, function myError(response) {
        $scope.Companys = response.statusText;
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
                alert("k có tồn tại");
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
})