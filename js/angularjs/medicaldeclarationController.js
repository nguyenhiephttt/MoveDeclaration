var app = angular.module('declarationApp', []);
app.controller('declarationCtrl', function ($scope, $http, $rootScope) {

    var idemp = location.search.split('em=')[1];
    if (idemp == undefined) {
        window.location.assign("http://127.0.0.1:5500/index.html");
    }
    document.getElementById("formkhaibao").style.display = 'none';

    $http({
        method: "GET",
        url: "http://192.168.2.12:8086/employeebyempcode/" + idemp
    }).then(function mySuccess(response) {
        $scope.employee = response.data;
        angular.forEach($scope.employee, function (item) {
            $scope.fullnameEmployee = item.fullnameEmployee;
            $scope.departmentEmployee = item.departmentEmployee;
            $scope.nameCompany = item.company.nameCompany;
            $scope.dateofbirthEmployee = formatDate(item.dateofbirthEmployee);
            $scope.nationalityEmployee = item.nationalityEmployee;
            $scope.cmnd = item.idEmployee;
            $scope.idnhanvien = item.recidEmployee;
        })
    }, function myError(response) {
        $scope.employee = response.statusText;
    });

    ///transportation
    $http({
        method: "GET",
        url: "http://192.168.2.12:8086/Transportations"
    }).then(function mySuccess(response) {
        $scope.Transportations = response.data;
    }, function myError(response) {
        $scope.Transportations = response.statusText;
    });

    ///province
    $http({
        method: "GET",
        url: "http://192.168.2.12:8086/Provinces"
    }).then(function mySuccess(response) {
        $scope.Provinces = response.data;
    }, function myError(response) {
        $scope.Provinces = response.statusText;
    });

    // var recid = $scope.idnhanvien;
    // alert(recid);
    $scope.QUESTION1 = '0';
    $scope.choosequestion1 = function (QUESTION1) {
        $scope.QUESTION1 = QUESTION1;
        if ($scope.QUESTION1 == 1) {
            document.getElementById("formkhaibao").style.display = 'block';
        }
        else {
            document.getElementById("formkhaibao").style.display = 'none';
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

    $scope.solannhap = 0;
    $scope.addtotable = function (ngaykhoihanh, diadiemkhoihanh, ngayden, noiden, phuongtiendichuyen) {

        if (ngaykhoihanh == undefined || diadiemkhoihanh == undefined || ngayden == undefined || noiden == undefined || phuongtiendichuyen == undefined) {
            alert("Vui lòng nhập đầy đủ thông tin / Please enter complete information.");
        }
        else if (ngaykhoihanh > ngayden) {
            alert("Ngày khởi hành không thể lớn hơn ngày đến / Departure date can not to than Arrival date.")
        }
        else {
            if ($scope.solannhap > 8) {
                alert("Bạn đã vượt quá số lần nhập lịch trình / You have declared over number of times allowed ");
            }
            else {
                $scope.solannhap = $scope.solannhap + 1;
                if ($scope.solannhap == 1) {
                    $scope.DEPADATE1 = document.getElementById("ngaykhoihanh").value;
                    var selectiondeploca = document.getElementById("diadiemkhoihanh");
                    $scope.DEPALOCA1 = selectiondeploca.options[selectiondeploca.selectedIndex].text;
                    $scope.ARRIDATE1 = document.getElementById("ngayden").value;
                    var selectionarriloca = document.getElementById("noiden");
                    $scope.ARRILOCA1 = selectionarriloca.options[selectionarriloca.selectedIndex].text;
                    var selectiomodetran = document.getElementById("phuongtiendichuyen");
                    $scope.MODETRANS1 = selectiomodetran.options[selectiomodetran.selectedIndex].text;
                    $scope.SEATNO1 = $scope.chongoi;

                    //reset form nhập
                    $scope.ngaykhoihanh = undefined;
                    $scope.diadiemkhoihanh = undefined;
                    $scope.ngayden = undefined;
                    $scope.noiden = undefined;
                    $scope.phuongtiendichuyen = undefined;
                    $scope.chongoi = undefined;
                }
                else if ($scope.solannhap == 2) {
                    $scope.DEPADATE2 = document.getElementById("ngaykhoihanh").value;
                    var selectiondeploca = document.getElementById("diadiemkhoihanh");
                    $scope.DEPALOCA2 = selectiondeploca.options[selectiondeploca.selectedIndex].text;
                    $scope.ARRIDATE2 = document.getElementById("ngayden").value;
                    var selectionarriloca = document.getElementById("noiden");
                    $scope.ARRILOCA2 = selectionarriloca.options[selectionarriloca.selectedIndex].text;
                    var selectiomodetran = document.getElementById("phuongtiendichuyen");
                    $scope.MODETRANS2 = selectiomodetran.options[selectiomodetran.selectedIndex].text;
                    $scope.SEATNO2 = $scope.chongoi;

                    //reset form nhập
                    $scope.ngaykhoihanh = undefined;
                    $scope.diadiemkhoihanh = undefined;
                    $scope.ngayden = undefined;
                    $scope.noiden = undefined;
                    $scope.phuongtiendichuyen = undefined;
                    $scope.chongoi = undefined;
                }
                else if ($scope.solannhap == 3) {
                    $scope.DEPADATE3 = document.getElementById("ngaykhoihanh").value;
                    var selectiondeploca = document.getElementById("diadiemkhoihanh");
                    $scope.DEPALOCA3 = selectiondeploca.options[selectiondeploca.selectedIndex].text;
                    $scope.ARRIDATE3 = document.getElementById("ngayden").value;
                    var selectionarriloca = document.getElementById("noiden");
                    $scope.ARRILOCA3 = selectionarriloca.options[selectionarriloca.selectedIndex].text;
                    var selectiomodetran = document.getElementById("phuongtiendichuyen");
                    $scope.MODETRANS3 = selectiomodetran.options[selectiomodetran.selectedIndex].text;
                    $scope.SEATNO3 = $scope.chongoi;

                    //reset form nhập
                    $scope.ngaykhoihanh = undefined;
                    $scope.diadiemkhoihanh = undefined;
                    $scope.ngayden = undefined;
                    $scope.noiden = undefined;
                    $scope.phuongtiendichuyen = undefined;
                    $scope.chongoi = undefined;

                }
                else if ($scope.solannhap == 4) {
                    $scope.DEPADATE4 = document.getElementById("ngaykhoihanh").value;
                    var selectiondeploca = document.getElementById("diadiemkhoihanh");
                    $scope.DEPALOCA4 = selectiondeploca.options[selectiondeploca.selectedIndex].text;
                    $scope.ARRIDATE4 = document.getElementById("ngayden").value;
                    var selectionarriloca = document.getElementById("noiden");
                    $scope.ARRILOCA4 = selectionarriloca.options[selectionarriloca.selectedIndex].text;
                    var selectiomodetran = document.getElementById("phuongtiendichuyen");
                    $scope.MODETRANS4 = selectiomodetran.options[selectiomodetran.selectedIndex].text;
                    $scope.SEATNO4 = $scope.chongoi;

                    //reset form nhập
                    $scope.ngaykhoihanh = undefined;
                    $scope.diadiemkhoihanh = undefined;
                    $scope.ngayden = undefined;
                    $scope.noiden = undefined;
                    $scope.phuongtiendichuyen = undefined;
                    $scope.chongoi = undefined;

                }
                else if ($scope.solannhap == 5) {
                    $scope.DEPADATE5 = document.getElementById("ngaykhoihanh").value;
                    var selectiondeploca = document.getElementById("diadiemkhoihanh");
                    $scope.DEPALOCA5 = selectiondeploca.options[selectiondeploca.selectedIndex].text;
                    $scope.ARRIDATE5 = document.getElementById("ngayden").value;
                    var selectionarriloca = document.getElementById("noiden");
                    $scope.ARRILOCA5 = selectionarriloca.options[selectionarriloca.selectedIndex].text;
                    var selectiomodetran = document.getElementById("phuongtiendichuyen");
                    $scope.MODETRANS5 = selectiomodetran.options[selectiomodetran.selectedIndex].text;
                    $scope.SEATNO5 = $scope.chongoi;

                    //reset form nhập
                    $scope.ngaykhoihanh = undefined;
                    $scope.diadiemkhoihanh = undefined;
                    $scope.ngayden = undefined;
                    $scope.noiden = undefined;
                    $scope.phuongtiendichuyen = undefined;
                    $scope.chongoi = undefined;

                }
                else if ($scope.solannhap == 6) {
                    $scope.DEPADATE6 = document.getElementById("ngaykhoihanh").value;
                    var selectiondeploca = document.getElementById("diadiemkhoihanh");
                    $scope.DEPALOCA6 = selectiondeploca.options[selectiondeploca.selectedIndex].text;
                    $scope.ARRIDATE6 = document.getElementById("ngayden").value;
                    var selectionarriloca = document.getElementById("noiden");
                    $scope.ARRILOCA6 = selectionarriloca.options[selectionarriloca.selectedIndex].text;
                    var selectiomodetran = document.getElementById("phuongtiendichuyen");
                    $scope.MODETRANS6 = selectiomodetran.options[selectiomodetran.selectedIndex].text;
                    $scope.SEATNO6 = $scope.chongoi;

                    //reset form nhập
                    $scope.ngaykhoihanh = undefined;
                    $scope.diadiemkhoihanh = undefined;
                    $scope.ngayden = undefined;
                    $scope.noiden = undefined;
                    $scope.phuongtiendichuyen = undefined;
                    $scope.chongoi = undefined;

                }
                else if ($scope.solannhap == 7) {
                    $scope.DEPADATE7 = document.getElementById("ngaykhoihanh").value;
                    var selectiondeploca = document.getElementById("diadiemkhoihanh");
                    $scope.DEPALOCA7 = selectiondeploca.options[selectiondeploca.selectedIndex].text;
                    $scope.ARRIDATE7 = document.getElementById("ngayden").value;
                    var selectionarriloca = document.getElementById("noiden");
                    $scope.ARRILOCA7 = selectionarriloca.options[selectionarriloca.selectedIndex].text;
                    var selectiomodetran = document.getElementById("phuongtiendichuyen");
                    $scope.MODETRANS7 = selectiomodetran.options[selectiomodetran.selectedIndex].text;
                    $scope.SEATNO7 = $scope.chongoi;

                    //reset form nhập
                    $scope.ngaykhoihanh = undefined;
                    $scope.diadiemkhoihanh = undefined;
                    $scope.ngayden = undefined;
                    $scope.noiden = undefined;
                    $scope.phuongtiendichuyen = undefined;
                    $scope.chongoi = undefined;

                }
                else if ($scope.solannhap == 8) {
                    $scope.DEPADATE8 = document.getElementById("ngaykhoihanh").value;
                    var selectiondeploca = document.getElementById("diadiemkhoihanh");
                    $scope.DEPALOCA8 = selectiondeploca.options[selectiondeploca.selectedIndex].text;
                    $scope.ARRIDATE8 = document.getElementById("ngayden").value;
                    var selectionarriloca = document.getElementById("noiden");
                    $scope.ARRILOCA8 = selectionarriloca.options[selectionarriloca.selectedIndex].text;
                    var selectiomodetran = document.getElementById("phuongtiendichuyen");
                    $scope.MODETRANS8 = selectiomodetran.options[selectiomodetran.selectedIndex].text;
                    $scope.SEATNO8 = $scope.chongoi;

                    //reset form nhập
                    $scope.ngaykhoihanh = undefined;
                    $scope.diadiemkhoihanh = undefined;
                    $scope.ngayden = undefined;
                    $scope.noiden = undefined;
                    $scope.phuongtiendichuyen = undefined;
                    $scope.chongoi = undefined;

                }
            }
        }
    }

    $scope.removeall = function () {
        $scope.solannhap = 0
        $scope.DEPADATE1 = undefined;
        $scope.DEPALOCA1 = undefined;
        $scope.ARRIDATE1 = undefined;
        $scope.ARRILOCA1 = undefined;
        $scope.MODETRANS1 = undefined;
        $scope.SEATNO1 = undefined;

        $scope.DEPADATE2 = undefined;
        $scope.DEPALOCA2 = undefined;
        $scope.ARRIDATE2 = undefined;
        $scope.ARRILOCA2 = undefined;
        $scope.MODETRANS2 = undefined;
        $scope.SEATNO2 = undefined;

        $scope.DEPADATE3 = undefined;
        $scope.DEPALOCA3 = undefined;
        $scope.ARRIDATE3 = undefined;
        $scope.ARRILOCA3 = undefined;
        $scope.MODETRANS3 = undefined;
        $scope.SEATNO3 = undefined;

        $scope.DEPADATE4 = undefined;
        $scope.DEPALOCA4 = undefined;
        $scope.ARRIDATE4 = undefined;
        $scope.ARRILOCA4 = undefined;
        $scope.MODETRANS4 = undefined;
        $scope.SEATNO4 = undefined;

        $scope.DEPADATE5 = undefined;
        $scope.DEPALOCA5 = undefined;
        $scope.ARRIDATE5 = undefined;
        $scope.ARRILOCA5 = undefined;
        $scope.MODETRANS5 = undefined;
        $scope.SEATNO5 = undefined;

        $scope.DEPADATE6 = undefined;
        $scope.DEPALOCA6 = undefined;
        $scope.ARRIDATE6 = undefined;
        $scope.ARRILOCA6 = undefined;
        $scope.MODETRANS6 = undefined;
        $scope.SEATNO6 = undefined;

        $scope.DEPADATE7 = undefined;
        $scope.DEPALOCA7 = undefined;
        $scope.ARRIDATE7 = undefined;
        $scope.ARRILOCA7 = undefined;
        $scope.MODETRANS7 = undefined;
        $scope.SEATNO7 = undefined;

        $scope.DEPADATE8 = undefined;
        $scope.DEPALOCA8 = undefined;
        $scope.ARRIDATE8 = undefined;
        $scope.ARRILOCA8 = undefined;
        $scope.MODETRANS8 = undefined;
        $scope.SEATNO8 = undefined;
    }



    $scope.submitform = function (idnhanvien,QUESTIONFEVER, QUESTIONCOUGH, QUESTIONBREATH, QUESTIONTHROAT, QUESTIONNAUSEA, QUESTIONDIARR, QUESTIONBLEEDING, QUESTIONRASHES,
        phoneEmployee, addressEmployee, QUESTION1, QUESTION3) {

        var d = new Date();
        var date = d.getUTCDate();
        var month = d.getUTCMonth() + 1;
        var year = d.getUTCFullYear();
        var dateStr = year + "-" + month + "-" + date;
        // alert(dateStr);
        var checkcamket = document.getElementById("checkcamket").checked;

        if (phoneEmployee == undefined || addressEmployee == undefined) {
            alert("Vui lòng nhập đủ thông tin.")
        }
        else if (QUESTION1 == 1 && $scope.solannhap == 0) {
            alert("Vui lòng khai báo lịch trình");
        }
        else if (checkcamket == false) {
            alert("Vui lòng đồng ý cam kết");
        }
        else {
            var DEPADATE1 = document.getElementById("DEPADATE1").value;
            var DEPADATE2 = document.getElementById("DEPADATE2").value;
            var DEPADATE3 = document.getElementById("DEPADATE3").value;
            var DEPADATE4 = document.getElementById("DEPADATE4").value;
            var DEPADATE5 = document.getElementById("DEPADATE5").value;
            var DEPADATE6 = document.getElementById("DEPADATE6").value;
            var DEPADATE7 = document.getElementById("DEPADATE7").value;
            var DEPADATE8 = document.getElementById("DEPADATE8").value;

            var DEPALOCA1 = document.getElementById("DEPALOCA1").value;
            var DEPALOCA2 = document.getElementById("DEPALOCA2").value;
            var DEPALOCA3 = document.getElementById("DEPALOCA3").value;
            var DEPALOCA4 = document.getElementById("DEPALOCA4").value;
            var DEPALOCA5 = document.getElementById("DEPALOCA5").value;
            var DEPALOCA6 = document.getElementById("DEPALOCA6").value;
            var DEPALOCA7 = document.getElementById("DEPALOCA7").value;
            var DEPALOCA8 = document.getElementById("DEPALOCA8").value;

            var ARRIDATE1 = document.getElementById("ARRIDATE1").value;
            var ARRIDATE2 = document.getElementById("ARRIDATE2").value;
            var ARRIDATE3 = document.getElementById("ARRIDATE3").value;
            var ARRIDATE4 = document.getElementById("ARRIDATE4").value;
            var ARRIDATE5 = document.getElementById("ARRIDATE5").value;
            var ARRIDATE6 = document.getElementById("ARRIDATE6").value;
            var ARRIDATE7 = document.getElementById("ARRIDATE7").value;
            var ARRIDATE8 = document.getElementById("ARRIDATE8").value;

            var ARRILOCA1 = document.getElementById("ARRILOCA1").value;
            var ARRILOCA2 = document.getElementById("ARRILOCA2").value;
            var ARRILOCA3 = document.getElementById("ARRILOCA3").value;
            var ARRILOCA4 = document.getElementById("ARRILOCA4").value;
            var ARRILOCA5 = document.getElementById("ARRILOCA5").value;
            var ARRILOCA6 = document.getElementById("ARRILOCA6").value;
            var ARRILOCA7 = document.getElementById("ARRILOCA7").value;
            var ARRILOCA8 = document.getElementById("ARRILOCA8").value;

            var MODETRANS1 = document.getElementById("MODETRANS1").value;
            var MODETRANS2 = document.getElementById("MODETRANS2").value;
            var MODETRANS3 = document.getElementById("MODETRANS3").value;
            var MODETRANS4 = document.getElementById("MODETRANS4").value;
            var MODETRANS5 = document.getElementById("MODETRANS5").value;
            var MODETRANS6 = document.getElementById("MODETRANS6").value;
            var MODETRANS7 = document.getElementById("MODETRANS7").value;
            var MODETRANS8 = document.getElementById("MODETRANS8").value;

            var SEATNO1 = document.getElementById("SEATNO1").value;
            var SEATNO2 = document.getElementById("SEATNO2").value;
            var SEATNO3 = document.getElementById("SEATNO3").value;
            var SEATNO4 = document.getElementById("SEATNO4").value;
            var SEATNO5 = document.getElementById("SEATNO5").value;
            var SEATNO6 = document.getElementById("SEATNO6").value;
            var SEATNO7 = document.getElementById("SEATNO7").value;
            var SEATNO8 = document.getElementById("SEATNO8").value;

            var data = {
                employee: {
                    recidEmployee: idnhanvien,
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

            $http.post('http://192.168.2.12:8086/createDeclaration', JSON.stringify(data)).then(function (response) {
                if (response.data) {
                    setTimeout(function () {
                        $http({
                            method: "GET",
                            url: "http://192.168.2.12:8086/findbyempcode/" + idnhanvien
                        }).then(function mySuccess(response) {
                            $scope.declarationemp = response.data;
                            angular.forEach($scope.declarationemp, function (item) {
                                iddecuoi = item.controlnoEmployee;
                            })
                            window.location.assign("http://127.0.0.1:5500/view/successpage.html?contro=" + iddecuoi);
                        }, function myError(response) {
                            $scope.declarationemp = response.statusText;
                        });
                        localStorage.clear();
                    }, 2000)
                }
            }, function (response) {
            });
        }



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