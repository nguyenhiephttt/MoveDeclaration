var app = angular.module('IndexApp', []);
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.controller('IndexController', function ($scope, $http) {
    var baseURL = "";
    var idEmployee = $scope.idEmployee;
    var company = $scope.company;
    $scope.FindEmployee = function (idEmployee, company) {
        $http(
            {
                method: 'GET',
                url=baseURL
            }
        ).then({
            
        });

    }


});

