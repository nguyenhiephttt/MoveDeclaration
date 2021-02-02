var app = angular.module('declarationApp', []);
app.controller('declarationCtrl', function ($scope, $http) {

    var idemp = location.search.split('em=')[1];

    $http({
        method: "GET",
        url: "http://localhost:8086/employeebyempcode/" + idemp
    }).then(function mySuccess(response) {
        $scope.employee = response.data;
        angular.forEach($scope.employee, function (item) {
            $scope.fullnameEmployee = item.fullnameEmployee;
            $scope.departmentEmployee = item.departmentEmployee;
            $scope.nameCompany = item.company.nameCompany;
            $scope.dateofbirthEmployee = formatDate(item.dateofbirthEmployee);
            $scope.nationalityEmployee = item.nationalityEmployee;
        })
    }, function myError(response) {
        $scope.employee = response.statusText;
    });

    $scope.QUESTION2 = '0';
    $scope.choosequestion2 = function (QUESTION2) {
        $scope.QUESTION2 = QUESTION2;
    }



    $scope.submitform = function(QUESTION2){
        alert(QUESTION2)
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
})