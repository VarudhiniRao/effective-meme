var app = angular.module('numberApp', []);

app.controller('numberCtrl', function($scope) {

    $scope.inputValue = "";
    $scope.output = [];
    $scope.inputValue2 = function(value) {
    	$scope.output = [];
        for (var i = 0; i <= $scope.inputValue; i++) {
            $scope.output.push(i);

        }
       
    }
    
    $scope.inputValue = "";
     






    // $scope.$watch('inputValue',function(value){
    // 	$scope.output=$scope.inputValue;
    // 	console.log($scope.output);
    // });

});
