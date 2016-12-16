var app = angular.module('myApp', ["ui.router"]);

app.controller('myCtrl', function($scope,$state,dataService) {
    $scope.obj = { };
    $scope.navigateTo = function(state) {
        $state.go(state);
        // $rootScope.$broadcast("MyEvent",$scope.obj);
        dataService.getData($scope.obj);
         console.log($scope.obj);
    }

   // $scope.$on("callParent",function(){
   //  alert("delhi");
   // });
    

});

app.controller('personalDetailsCtrl', function($scope, $state,dataService) {
    $scope.obj2 = {};
    $scope.navigateTo = function(state) {

        $state.go(state);
//         $rootScope.$on("MyEvent", function(evt,data){
//             $scope.mainArray=[];
//             // $scope.mainArray.push($scope.obj2);
//             $scope.mainArray.push(data);
//             console.log(data);
// console.log( $scope.mainArray);
//         });
         dataService.getData2($scope.obj2);
         console.log($scope.obj2);
         // $scope.$emit("callParent");
    }




});
app.controller('EducationDetailsCtrl', function($scope,$state,dataService) {
    $scope.obj3= {};
    $scope.mainArray =[];
    console.log($scope.obj3);
    $scope.fnSubmit = function(){
         $scope.mainArray = dataService.getAllDetails();
        $scope.mainArray.push($scope.obj3)
        console.log($scope.mainArray);
    }

     // dataService.getData3($scope.obj);
     //     console.log($scope.obj);

});




app.service('dataService', function(){
    this.ArrayData =[];
    this.getData=function(obj){
        // var mainArray=[];
        this.ArrayData.push(obj);
        console.log(this.ArrayData);
    }
    this.getData2=function(obj){
        // var PersonalDetailArray=[];
        this.ArrayData.push(obj);
         console.log(this.ArrayData);
    }
    this.getData3=function(obj){
        // var educationDetailArray=[];
        this.ArrayData.push(obj);
         console.log(this.ArrayData);
    }
    this.getAllDetails = function(){
        return this.ArrayData;
    }
});


app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('mainInfo', {
            url: "/",
            controller:'myCtrl',
            
                    templateUrl: "./templates/mainInfo.html"
               
            


           
        })
        .state('personalDetails', {
            url: "/PersonalDetails",
            controller:'personalDetailsCtrl',
            
           
                    templateUrl: "./templates/personalDetails.html"
                
            


            
        })
        .state('educationDetails', {
            url: "/EducationDetails",
            controller:'EducationDetailsCtrl',
            
            
                    templateUrl: "./templates/educationDetails.html"
                
            

            
        })
        .state('details', {
            url: "/ApplicationDetails",
            controller:'EducationDetailsCtrl',
            
            
                    templateUrl: "./templates/details.html"
                
            

            
        });
    // state('mainInfo', {
    //  url:"/PersonalDetails",


    //     templateUrl: "./templates/personalDetails.html"
    // })
});
