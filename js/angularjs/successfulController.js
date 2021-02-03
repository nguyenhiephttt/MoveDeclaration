var app = angular.module('SuccessApp', []);
app.controller('successCtrl', function ($scope, $http) {



    $http({

        method: "GET",
        url: "http://192.168.2.12:8086/declaration/17"

    }).then(function mySuccess(response) {
        console.log(response.data);
        employeeData = response.data;

        $scope.controlnoEmployee=employeeData.controlnoEmployee;
        $scope.decdateEmployee=employeeData.decdateEmployee;

        $scope.fullname = employeeData.employee.fullnameEmployee;
        $scope.department=employeeData.employee.departmentEmployee;
        $scope.company=employeeData.employee.company.nameCompany;
        $scope.departmnet=employeeData.employee.departmentEmployee;
        $scope.phone=employeeData.phoneEmployee;
        $scope.nationality=employeeData.employee.nationalityEmployee;
        $scope.dateofbrith=employeeData.employee.dateofbirthEmployee;
        $scope.address=employeeData.addressEmployee
        $scope.idEmployee=employeeData.employee.idEmployee;
        $scope.question1Employee=employeeData.question1Employee
        if(employeeData.question1Employee==1){

            $scope.question1Employee="Có/ Yes"
            document.getElementById("tableMove").style.display = "block";
        }else{
            $scope.question1Employee="Không/ No"
            document.getElementById("tableMove").style.display = "none";

        }

// row1
        if(employeeData.deplocal1Employee==null || employeeData.arriloca1Employee==null){
            $scope.depdate1Employee=null;

            $scope.deplocal1Employee=null;

            $scope.arridate1Employee=null;

            $scope.arriloca1Employee=null;

            $scope.modetrans1Employee=null;

            $scope.seatno1Employee=null;

        }else{
            $scope.depdate1Employee=employeeData.depdate1Employee;

            $scope.deplocal1Employee=employeeData.deplocal1Employee;

            $scope.arridate1Employee=employeeData.arridate1Employee;

            $scope.arriloca1Employee=employeeData.arriloca1Employee;

            $scope.modetrans1Employee=employeeData.modetrans1Employee;

            $scope.seatno1Employee=employeeData.seatno1Employee;
        }
// row2
        if(employeeData.deplocal2Employee==="" || employeeData.arriloca2Employee===""){
            $scope.depdate2Employee=null;

            $scope.deplocal2Employee=null;

            $scope.arridate2Employee=null;

            $scope.arriloca2Employee=null;

            $scope.modetrans2Employee=null;

            $scope.seatno2Employee=null;

        }else{
            $scope.depdate2Employee=employeeData.depdate2Employee;

            $scope.deplocal2Employee=employeeData.deplocal2Employee;

            $scope.arridate2Employee=employeeData.arridate2Employee;

            $scope.arriloca2Employee=employeeData.arriloca2Employee;

            $scope.modetrans2Employee=employeeData.modetrans2Employee;

            $scope.seatno2Employee=employeeData.seatno2Employee;
        }
// row3  
        if(employeeData.deplocal3Employee=="" || employeeData.arriloca3Employee==""){
            $scope.depdate3Employee=null;

            $scope.deplocal3Employee=null;

            $scope.arridate3Employee=null;

            $scope.arriloca3Employee=null;

            $scope.modetrans3Employee=null;

            $scope.seatno3Employee=null;

        }else{
            $scope.depdate3Employee=employeeData.depdate3Employee;

            $scope.deplocal3Employee=employeeData.deplocal3Employee;

            $scope.arridate3Employee=employeeData.arridate3Employee;

            $scope.arriloca3Employee=employeeData.arriloca3Employee;

            $scope.modetrans3Employee=employeeData.modetrans3Employee;

            $scope.seatno3Employee=employeeData.seatno3Employee;
        }
// roe 4
        if(employeeData.deplocal4Employee=="" || employeeData.arriloca4Employee==""){
            $scope.depdate4Employee=null;

            $scope.deplocal4Employee=null;

            $scope.arridate4Employee=null;

            $scope.arriloca4Employee=null;

            $scope.modetrans4Employee=null;

            $scope.seatno4Employee=null;

        }else{
            $scope.depdate4Employee=employeeData.depdate4Employee;

            $scope.deplocal4Employee=employeeData.deplocal4Employee;

            $scope.arridate4Employee=employeeData.arridate4Employee;

            $scope.arriloca4Employee=employeeData.arriloca4Employee;

            $scope.modetrans4Employee=employeeData.modetrans4Employee;

            $scope.seatno4Employee=employeeData.seatno4Employee;
        }
// row 5
        if(employeeData.deplocal5Employee=="" || employeeData.arriloca5Employee==""){
            $scope.depdate5Employee=null;

            $scope.deplocal5Employee=null;

            $scope.arridate5Employee=null;

            $scope.arriloca5Employee=null;

            $scope.modetrans5Employee=null;

            $scope.seatno5Employee=null;

        }else{
            $scope.depdate5Employee=employeeData.depdate5Employee;

            $scope.deplocal5Employee=employeeData.deplocal5Employee;

            $scope.arridate5Employee=employeeData.arridate5Employee;

            $scope.arriloca5Employee=employeeData.arriloca5Employee;

            $scope.modetrans5Employee=employeeData.modetrans5Employee;

            $scope.seatno5Employee=employeeData.seatno5Employee;
        }
// row 6
        if(employeeData.deplocal6Employee=="" || employeeData.arriloca6Employee==""){
            $scope.depdate6Employee=null;

            $scope.deplocal6Employee=null;

            $scope.arridate6Employee=null;

            $scope.arriloca6Employee=null;

            $scope.modetrans6Employee=null;

            $scope.seatno6Employee=null;

        }else{
            $scope.depdate6Employee=employeeData.depdate6Employee;

            $scope.deplocal6Employee=employeeData.deplocal6Employee;

            $scope.arridate6Employee=employeeData.arridate6Employee;

            $scope.arriloca6Employee=employeeData.arriloca6Employee;

            $scope.modetrans6Employee=employeeData.modetrans6Employee;

            $scope.seatno6Employee=employeeData.seatno6Employee;
        }
// row 7
        if(employeeData.deplocal7Employee=="" || employeeData.arriloca7Employee==""){
            $scope.depdate7Employee=null;

            $scope.deplocal7Employee=null;

            $scope.arridate7Employee=null;

            $scope.arriloca7Employee=null;

            $scope.modetrans7Employee=null;

            $scope.seatno7Employee=null;

        }else{
            $scope.depdate7Employee=employeeData.depdate7Employee;

            $scope.deplocal7Employee=employeeData.deplocal7Employee;

            $scope.arridate7Employee=employeeData.arridate7Employee;

            $scope.arriloca7Employee=employeeData.arriloca7Employee;

            $scope.modetrans7Employee=employeeData.modetrans7Employee;

            $scope.seatno7Employee=employeeData.seatno7Employee;
        }
// row 8
        if(employeeData.deplocal8Employee=="" || employeeData.arriloca8Employee==""){
            $scope.depdate8Employee=null;

            $scope.deplocal8Employee=null;

            $scope.arridate8Employee=null;

            $scope.arriloca8Employee=null;

            $scope.modetrans8Employee=null;

            $scope.seatno8Employee=null;

        }else{
            $scope.depdate8Employee=employeeData.depdate8Employee;

            $scope.deplocal8Employee=employeeData.deplocal8Employee;

            $scope.arridate8Employee=employeeData.arridate8Employee;

            $scope.arriloca8Employee=employeeData.arriloca8Employee;

            $scope.modetrans8Employee=employeeData.modetrans8Employee;

            $scope.seatno8Employee=employeeData.seatno8Employee;
        }

        $scope.fever="Không/No"
        if(employeeData.feverEmployee==1){
            $scope.fever="Có/Yes"
        }

        $scope.cough="Không/No"
        if(employeeData.coughEmployee==1){
            $scope.cough="Có/Yes"
        }

        $scope.shortnessofbreath="Không/No"
        if(employeeData.shortbreathEmployee==1){
            $scope.shortnessofbreath="Có/Yes"
        }

        $scope.sorethroat="Không/No"
        if(employeeData.sorethroatEmployee==1){
            $scope.sorethroat="Có/Yes"
        }

        $scope.vomitNausea="Không/No"
        if(employeeData.nauseaEmployee==1){
            $scope.vomitNausea="Có/Yes"
        }

        $scope.diarrhoea="Không/No"
        if(employeeData.diarrhoeaEmployee==1){
            $scope.diarrhoea="Có/Yes"
        }

        $scope.skinBleeding="Không/No"
        if(employeeData.skinbleedEmployee==1){
            $scope.skinBleeding="Có/Yes"
        }

        $scope.skinRashes="Không/No"
        if(employeeData.skinrashesEmployee==1){
            $scope.skinRashes="Có/Yes"
        }

        $scope.question3Employee="Không/No"
        if(employeeData.question3Employee==1){
            $scope.question3Employee="Có/Yes"
        }

    });

});