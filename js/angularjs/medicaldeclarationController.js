var app = angular.module('declarationApp', []);
app.controller('declarationCtrl', function ($scope, $http, $rootScope) {

    var idemp = location.search.split('em=')[1];
    document.getElementById("tabledeclaration").style.display = 'none';

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
            $scope.cmnd = item.idEmployee;
            window.sessionStorage.setItem("recid", item.recidEmployee);
        })
    }, function myError(response) {
        $scope.employee = response.statusText;
    });

    ///transportation
    $http({
        method: "GET",
        url: "http://localhost:8086/Transportations"
    }).then(function mySuccess(response) {
        $scope.Transportations = response.data;
    }, function myError(response) {
        $scope.Transportations = response.statusText;
    });

    ///province
    $http({
        method: "GET",
        url: "http://localhost:8086/Provinces"
    }).then(function mySuccess(response) {
        $scope.Provinces = response.data;
    }, function myError(response) {
        $scope.Provinces = response.statusText;
    });

    var recid = window.sessionStorage.getItem("recid");
    $scope.QUESTION1 = '0';
    $scope.choosequestion1 = function (QUESTION1) {
        $scope.QUESTION1 = QUESTION1;
        if ($scope.QUESTION1 == 1) {
            document.getElementById("tabledeclaration").style.display = 'block';
        }
        else {
            document.getElementById("tabledeclaration").style.display = 'none';
        }
    }

    $scope.QUESTIONFEVER = '0';
    $scope.choosequestionfever = function (QUESTIONFEVER) {
        $scope.QUESTIONFEVER = QUESTIONFEVER;
        //alert($scope.QUESTIONFEVER);
    }

    $scope.QUESTIONCOUGH = '0';
    $scope.choosequestioncough = function (QUESTIONCOUGH) {
        $scope.QUESTIONCOUGH = QUESTIONCOUGH;
        //alert($scope.QUESTIONCOUGH);
    }

    $scope.QUESTIONBREATH = '0';
    $scope.choosequestionbreath = function (QUESTIONBREATH) {
        $scope.QUESTIONBREATH = QUESTIONBREATH;
        // alert($scope.QUESTIONBREATH);
    }

    $scope.QUESTIONTHROAT = '0';
    $scope.choosequestionthroat = function (QUESTIONTHROAT) {
        $scope.QUESTIONTHROAT = QUESTIONTHROAT;
        // alert($scope.QUESTIONTHROAT);
    }

    $scope.QUESTIONNAUSEA = '0';
    $scope.choosequestionnausea = function (QUESTIONNAUSEA) {
        $scope.QUESTIONNAUSEA = QUESTIONNAUSEA;
        // alert($scope.QUESTIONNAUSEA);
    }

    $scope.QUESTIONDIARR = '0';
    $scope.choosequestiondiarr = function (QUESTIONDIARR) {
        $scope.QUESTIONDIARR = QUESTIONDIARR;
        // alert($scope.QUESTIONDIARR);
    }

    $scope.QUESTIONBLEEDING = '0';
    $scope.choosequestionbleeding = function (QUESTIONBLEEDING) {
        $scope.QUESTIONBLEEDING = QUESTIONBLEEDING;
        // alert($scope.QUESTIONBLEEDING);
    }

    $scope.QUESTIONRASHES = '0';
    $scope.choosequestionrashes = function (QUESTIONRASHES) {
        $scope.QUESTIONRASHES = QUESTIONRASHES;
        // alert($scope.QUESTIONRASHES);
    }

    $scope.QUESTION3 = '0';
    $scope.choosequestioncare = function (QUESTION3) {
        $scope.QUESTION3 = QUESTION3;
        // alert($scope.QUESTION3);
    }




    $scope.submitform = function (QUESTIONFEVER, QUESTIONCOUGH, QUESTIONBREATH, QUESTIONTHROAT, QUESTIONNAUSEA, QUESTIONDIARR, QUESTIONBLEEDING, QUESTIONRASHES,
        phoneEmployee, addressEmployee,
        SEATNO1, SEATNO2, SEATNO3, SEATNO4, SEATNO5, SEATNO6, SEATNO7, SEATNO8, QUESTION1, QUESTION3) {

        var d = new Date();
        var date = d.getUTCDate();
        var month = d.getUTCMonth() + 1;
        var year = d.getUTCFullYear();
        var dateStr = year + "-" + month + "-" + date;
        // alert(dateStr);

        var DEPADATE1 = document.getElementById("DEPADATE1").value;
        var DEPADATE2 = document.getElementById("DEPADATE2").value;
        var DEPADATE3 = document.getElementById("DEPADATE3").value;
        var DEPADATE4 = document.getElementById("DEPADATE4").value;
        var DEPADATE5 = document.getElementById("DEPADATE5").value;
        var DEPADATE6 = document.getElementById("DEPADATE6").value;
        var DEPADATE7 = document.getElementById("DEPADATE7").value;
        var DEPADATE8 = document.getElementById("DEPADATE8").value;

        var selectiondeploca1 = document.getElementById("DEPALOCA1");
        var DEPALOCA1 = selectiondeploca1.options[selectiondeploca1.selectedIndex].text;
        var selectiondeploca2 = document.getElementById("DEPALOCA2");
        var DEPALOCA2 = selectiondeploca2.options[selectiondeploca2.selectedIndex].text;
        var selectiondeploca3 = document.getElementById("DEPALOCA3");
        var DEPALOCA3 = selectiondeploca3.options[selectiondeploca3.selectedIndex].text;
        var selectiondeploca4 = document.getElementById("DEPALOCA4");
        var DEPALOCA4 = selectiondeploca4.options[selectiondeploca4.selectedIndex].text;
        var selectiondeploca5 = document.getElementById("DEPALOCA5");
        var DEPALOCA5 = selectiondeploca5.options[selectiondeploca5.selectedIndex].text;
        var selectiondeploca6 = document.getElementById("DEPALOCA6");
        var DEPALOCA6 = selectiondeploca6.options[selectiondeploca6.selectedIndex].text;
        var selectiondeploca7 = document.getElementById("DEPALOCA7");
        var DEPALOCA7 = selectiondeploca7.options[selectiondeploca7.selectedIndex].text;
        var selectiondeploca8 = document.getElementById("DEPALOCA8");
        var DEPALOCA8 = selectiondeploca8.options[selectiondeploca8.selectedIndex].text;

        var ARRIDATE1 = document.getElementById("ARRIDATE1").value;
        var ARRIDATE2 = document.getElementById("ARRIDATE2").value;
        var ARRIDATE3 = document.getElementById("ARRIDATE3").value;
        var ARRIDATE4 = document.getElementById("ARRIDATE4").value;
        var ARRIDATE5 = document.getElementById("ARRIDATE5").value;
        var ARRIDATE6 = document.getElementById("ARRIDATE6").value;
        var ARRIDATE7 = document.getElementById("ARRIDATE7").value;
        var ARRIDATE8 = document.getElementById("ARRIDATE8").value;

        var selectionarriloca1 = document.getElementById("ARRILOCA1");
        var ARRILOCA1 = selectionarriloca1.options[selectionarriloca1.selectedIndex].text;
        var selectionarriloca2 = document.getElementById("ARRILOCA2");
        var ARRILOCA2 = selectionarriloca2.options[selectionarriloca2.selectedIndex].text;
        var selectionarriloca3 = document.getElementById("ARRILOCA3");
        var ARRILOCA3 = selectionarriloca3.options[selectionarriloca3.selectedIndex].text;
        var selectionarriloca4 = document.getElementById("ARRILOCA4");
        var ARRILOCA4 = selectionarriloca4.options[selectionarriloca4.selectedIndex].text;
        var selectionarriloca5 = document.getElementById("ARRILOCA5");
        var ARRILOCA5 = selectionarriloca5.options[selectionarriloca5.selectedIndex].text;
        var selectionarriloca6 = document.getElementById("ARRILOCA6");
        var ARRILOCA6 = selectionarriloca6.options[selectionarriloca6.selectedIndex].text;
        var selectionarriloca7 = document.getElementById("ARRILOCA7");
        var ARRILOCA7 = selectionarriloca7.options[selectionarriloca7.selectedIndex].text;
        var selectionarriloca8 = document.getElementById("ARRILOCA8");
        var ARRILOCA8 = selectionarriloca8.options[selectionarriloca8.selectedIndex].text;

        var selectiomodetran1 = document.getElementById("MODETRANS1");
        var MODETRANS1 = selectiomodetran1.options[selectiomodetran1.selectedIndex].text;
        var selectiomodetran2 = document.getElementById("MODETRANS2");
        var MODETRANS2 = selectiomodetran2.options[selectiomodetran2.selectedIndex].text;
        var selectiomodetran3 = document.getElementById("MODETRANS3");
        var MODETRANS3 = selectiomodetran3.options[selectiomodetran3.selectedIndex].text;
        var selectiomodetran4 = document.getElementById("MODETRANS4");
        var MODETRANS4 = selectiomodetran4.options[selectiomodetran4.selectedIndex].text;
        var selectiomodetran5 = document.getElementById("MODETRANS5");
        var MODETRANS5 = selectiomodetran5.options[selectiomodetran5.selectedIndex].text;
        var selectiomodetran6 = document.getElementById("MODETRANS6");
        var MODETRANS6 = selectiomodetran6.options[selectiomodetran6.selectedIndex].text;
        var selectiomodetran7 = document.getElementById("MODETRANS7");
        var MODETRANS7 = selectiomodetran7.options[selectiomodetran7.selectedIndex].text;
        var selectiomodetran8 = document.getElementById("MODETRANS8");
        var MODETRANS8 = selectiomodetran8.options[selectiomodetran8.selectedIndex].text;

        var data = {
            employee: {
                recidEmployee: recid,
                company: {
                    idCompany: "",
                    nameCompany: ""
                },
                empcodeEmployee: "",
                smcEmployee: "",
                fullnameEmployee: "",
                departmentEmployee: "",
                dateofbirthEmployee: "",
                idEmployee: "",
                nationalityEmployee: ""
            },
            decdateEmployee: dateStr,
            phoneEmployee: phoneEmployee,
            addressEmployee: addressEmployee,
            question1Employee: QUESTION1,
            depdate1Employee: DEPADATE1,
            depdate2Employee: DEPADATE2,
            depdate3Employee: DEPADATE3,
            depdate4Employee: DEPADATE4,
            depdate5Employee: DEPADATE5,
            depdate6Employee: DEPADATE6,
            depdate7Employee: DEPADATE7,
            depdate8Employee: DEPADATE8,
            deplocal1Employee: DEPALOCA1,
            deplocal2Employee: DEPALOCA2,
            deplocal3Employee: DEPALOCA3,
            deplocal4Employee: DEPALOCA4,
            deplocal5Employee: DEPALOCA5,
            deplocal6Employee: DEPALOCA6,
            deplocal7Employee: DEPALOCA7,
            deplocal8Employee: DEPALOCA8,
            arridate1Employee: ARRIDATE1,
            arridate2Employee: ARRIDATE2,
            arridate3Employee: ARRIDATE3,
            arridate4Employee: ARRIDATE4,
            arridate5Employee: ARRIDATE5,
            arridate6Employee: ARRIDATE6,
            arridate7Employee: ARRIDATE7,
            arridate8Employee: ARRIDATE8,
            arriloca1Employee: ARRILOCA1,
            arriloca2Employee: ARRILOCA2,
            arriloca3Employee: ARRILOCA3,
            arriloca4Employee: ARRILOCA4,
            arriloca5Employee: ARRILOCA5,
            arriloca6Employee: ARRILOCA6,
            arriloca7Employee: ARRILOCA7,
            arriloca8Employee: ARRILOCA8,
            modetrans1Employee: MODETRANS1,
            modetrans2Employee: MODETRANS2,
            modetrans3Employee: MODETRANS3,
            modetrans4Employee: MODETRANS4,
            modetrans5Employee: MODETRANS5,
            modetrans6Employee: MODETRANS6,
            modetrans7Employee: MODETRANS7,
            modetrans8Employee: MODETRANS8,
            seatno1Employee: SEATNO1,
            seatno2Employee: SEATNO2,
            seatno3Employee: SEATNO3,
            seatno4Employee: SEATNO4,
            seatno5Employee: SEATNO5,
            seatno6Employee: SEATNO6,
            seatno7Employee: SEATNO7,
            seatno8Employee: SEATNO8,
            question2Employee: 0,
            feverEmployee: QUESTIONFEVER,
            coughEmployee: QUESTIONCOUGH,
            shortbreathEmployee: QUESTIONBREATH,
            sorethroatEmployee: QUESTIONTHROAT,
            nauseaEmployee: QUESTIONNAUSEA,
            diarrhoeaEmployee: QUESTIONDIARR,
            skinbleedEmployee: QUESTIONBLEEDING,
            skinrashesEmployee: QUESTIONRASHES,
            question3Employee: QUESTION3
        }

        $http.post('http://localhost:8086/createDeclaration', JSON.stringify(data)).then(function (response) {
            if (response.data) {
                setTimeout(function () {
                    alert("Success!");
                    // window.location.reload();
                }, 2000);
            }
        }, function (response) {
        });

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