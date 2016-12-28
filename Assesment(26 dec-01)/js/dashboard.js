var app = angular.module('farmerDashboard', []);

app.directive('navbarDirective', function() {
    return {
        restrict: 'EA',

        templateUrl: "./templates/navbarTemplate.html"

    };
});
app.directive('graphNavDirective', function() {
    return {
        restrict: 'EA',

        templateUrl: "./templates/graphNavbartemplate.html"

    };

});
app.directive('waterRecordDirective', function() {
    return {
        restrict: 'EA',

        templateUrl: "./templates/waterRecordtable.html"

    };

});
app.controller('navctrl', function($scope) {

});
app.controller('graphDataCtrl', function($scope, ajaxCallService) {
    $scope.clickMe = function() {
        $scope.myData = null;
        ajaxCallService.getData(function(dataResponse) {
            $scope.myData = (dataResponse);
            for (var i = 0; i < $scope.myData.length; i++) {
                $scope.myData[i].type = "stackedBar";
                $scope.myData[i].showInLegend = true;
            };
            console.log($scope.myData)
            chartFunction($scope.myData);

        });
    };

    function chartFunction(myData) {
        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Boxes per Acre"
            },
            animationEnabled: true,
            data: myData

        });

        chart.render();
    }
    $scope.clickMe();

});


app.service('ajaxCallService', function($http) {
    this.getData = function(callbackFunc) {

        $http.get("js/document.json").success(function(data) {
            console.log(data)
            callbackFunc(data);


        }).error(function() {
            alert("error");
        });
    }

     this.getData2 = function(callbackFunc) {

        $http.get("js/document2.json").success(function(data) {
            console.log(data)
            callbackFunc(data);


        }).error(function() {
            alert("error");
        });
    }
    this.getWaterResult = function(callbackFunc) {

        $http.get("js/Result.json").success(function(data) {
            console.log(data)
            callbackFunc(data);


        }).error(function() {
            alert("error");
        });
    }
});


app.controller('forecastDataCtrl', function($scope, ajaxCallService) {
    $scope.clickMe = function() {
        $scope.myData2 = null;
        ajaxCallService.getData2(function(dataResponse) {
            $scope.myData2 = (dataResponse);
            for (var i = 0; i < $scope.myData2.length; i++) {
                $scope.myData2[i].type = "column";
                $scope.myData2[i].showInLegend = true;
            };
            console.log($scope.myData2)
            graphFunction($scope.myData2);

        });
    };

    function graphFunction(myData2) {
        var chart = new CanvasJS.Chart("chartContainer2", {
            theme: "theme3",
                        animationEnabled: true,
            
            toolTip: {
                shared: true
            },          
            axisY: {
                title: "Total Yield",

            } ,    
            
            
            data: myData2

        });

        chart.render();
    }
    $scope.clickMe();

});

app.controller('waterRecordCtrl', function($scope, ajaxCallService) {
    $scope.clickMe = function() {
        $scope.myData = null;
        ajaxCallService.getWaterResult(function(dataResponse) {
            $scope.myData = dataResponse;
            
            console.log($scope.myData)
           

        });
    };
 $scope.clickMe();

});
