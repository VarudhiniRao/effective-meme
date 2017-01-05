var app = angular.module('paymentInfoApp', []);

app.controller('addDetailsCtrl', function($scope, jsonService) {
    // body
    $scope.fnOpen = function() {
        $("#myModal").modal('show');
    }
    $scope.moveNext = function() {
        $('#myModal2').modal('show');
    }
    $scope.moveBack = function() {
        $('#myModal2').modal('hide');
        $("#myModal").modal('show');

    }


    //getting all the json
    $scope.myData1 = {};
    $scope.select = "Select";
    $scope.select2 = "Select";
    $scope.select3 = "Select";
    $scope.select4 = "Select";
    $scope.select5 = "Select";
    $scope.select6 = "Select";
    $scope.select7 = "Select";
    $scope.select8 = "Select";

    jsonService.getc_FrequencyType(function(dataResponse) {
        $scope.myData1 = dataResponse;
        for (var i = 0; i < $scope.myData1.length; i++) {
            var myPath = $scope.myData1[i].path;
            $scope.myPathValue1 = myPath.split("\\");
        }
    });

    $scope.changeSelect = function(select) {
        $scope.select = select;
    };
    $scope.changeSelect2 = function(select2) {
        $scope.select2 = select2;
    };
    $scope.changeSelect3 = function(select3) {
        $scope.select3 = select3;
    };
    $scope.changeSelect4 = function(select4) {
        $scope.select4 = select4;
    };
    $scope.changeSelect5 = function(select5) {
        $scope.select5 = select5;
    };
    $scope.changeSelect6 = function(select6) {
        $scope.select6 = select6;
    };
    $scope.changeSelect7 = function(select7) {
        $scope.select7 = select7;
    };
    $scope.changeSelect8 = function(select8) {
        $scope.select8 = select8;
    };
    $scope.SaveMe = function() {

        $scope.DetailedArray = [];

        $scope.DetailedArray.push($scope.select);
        console.log($scope.DetailedArray);
        $scope.DetailedArray.push($scope.select2);
        console.log($scope.DetailedArray);
        $scope.DetailedArray.push($scope.select3);
        console.log($scope.DetailedArray);
        $scope.DetailedArray.push($scope.select4);
        console.log($scope.DetailedArray);
        $scope.DetailedArray.push($scope.select5);
        console.log($scope.DetailedArray);
        $scope.DetailedArray.push($scope.select6);
        console.log($scope.DetailedArray);
        $scope.DetailedArray.push($scope.select7);
        console.log($scope.DetailedArray);
        $scope.DetailedArray.push($scope.select8);
        console.log($scope.DetailedArray);
        $scope.DetailedArray.push($scope.textTyped_1);
        console.log($scope.DetailedArray);
        $scope.DetailedArray.push($scope.textTyped_2);
        console.log($scope.DetailedArray);
        $scope.DetailedArray.push($scope.textTyped_3);
        console.log($scope.DetailedArray);
        $scope.DetailedArray.push($scope.textTyped_5);
        console.log($scope.DetailedArray);
        $scope.DetailedArray.push($scope.textTyped_4);
        console.log($scope.DetailedArray);

    }



    $scope.myData2 = {};
    jsonService.getc_PaymentType(function(dataResponse) {
        $scope.myData2 = dataResponse;
        $scope.myPathValue2 = [];
        for (var i = 0; i < $scope.myData2.length; i++) {
            var myPath = $scope.myData2[i].path;
            console.log(myPath);
            var myPatharray = myPath.split("\\");
            console.log(myPatharray);
            $scope.myPathValue2.push(myPatharray[myPatharray.length - 1]);
        }
        console.log($scope.data2)
    });

    $scope.myData3 = {};
    jsonService.getI_AccountingType(function(dataResponse) {
        $scope.myData3 = dataResponse;

        $scope.changeSelect = function(select) {
            $scope.select = select;
        };
    });

    $scope.myData4 = {};
    jsonService.getI_ChargeAmountBasis(function(dataResponse) {
        $scope.myData4 = dataResponse;

    });
    $scope.myData5 = {};
    jsonService.getI_GrowthType(function(dataResponse) {
        $scope.myData5 = dataResponse;

    });


    $scope.myData6 = {};
    jsonService.getI_PaymentDueDay(function(dataResponse) {
        $scope.myData6 = dataResponse;

    });
    $scope.myData7 = {};
    jsonService.getI_PaymentDueOn(function(dataResponse) {
        $scope.myData7 = dataResponse;

    });


    $scope.myData8 = {};
    jsonService.getI_PaymentTiming(function(dataResponse) {
        $scope.myData8 = dataResponse;

    });




});

app.service('jsonService', function($http) {
    this.getc_FrequencyType = function(callbackFunc) {
        $http.get('jsons/c_frequecyType.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }
    this.getc_PaymentType = function(callbackFunc) {
        $http.get('jsons/c_paymentType.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }
    this.getI_AccountingType = function(callbackFunc) {
        $http.get('jsons/l_AccountingType.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }
    this.getI_ChargeAmountBasis = function(callbackFunc) {
        $http.get('jsons/l_ChargeAmountBasis.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }
    this.getI_GrowthType = function(callbackFunc) {
        $http.get('jsons/l_GrowthType.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }
    this.getI_PaymentDueDay = function(callbackFunc) {
        $http.get('jsons/l_PaymentDueDay.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }
    this.getI_PaymentDueOn = function(callbackFunc) {
        $http.get('jsons/l_PaymentDueOn.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }
    this.getI_PaymentTiming = function(callbackFunc) {
        $http.get('jsons/l_PaymentTiming.json').success(function(data) {
            console.log(data)
            callbackFunc(data);

        }).error(function() {
            console.log("error");
        });
    }

});

app.controller("growthCtrl", function($scope) {

    // body...
    $scope.moveNext = function() {
        $('')

    }
})
