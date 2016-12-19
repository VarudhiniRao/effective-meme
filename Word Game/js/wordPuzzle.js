var app = angular.module('wordApp', []);

app.controller('wordPuzzleCtrl', function($scope) {
    $scope.guessLetter = "";
    $scope.wrongWord = [];
    $scope.guessButton = function(guessLetter) {
        //finds the indeces value
        //prints the index for which the letter is entered 
        var indices = [];
        for (var i = 0; i < $scope.randomWord.length; i++) {
            if ($scope.randomWord[i] === guessLetter) {
                indices.push(i)
            };

            console.log(indices);
        }
        //if there is more than 0 or 1... iterates the indexes and pushes the input value to the existing word`s index
        if (indices.length > 0) {
            for (var i = 0; i < indices.length; i++) {
                $scope.z[indices[i]].value = guessLetter;

               
            }
            var count = 0;
             for (var i = 0; i < $scope.z.length; i++) {
                    if ($scope.z[i].value !='') {
                        count = count + 1;
                    }
                    if (count == $scope.randomWord.length) {
                        alert("YOU WON")
                    }
                }
            $scope.guessLetter = "";
        } else {

            $scope.wrongWord.push($scope.guessLetter);
            $scope.guessLetter = "";


        }
    }

    var wordsArray = ["chrome", "firefox", "codepen", "javascript", "jquery",
        "twitter", "github", "wordpress", "opera", "sass", "layout", "standards",
        "semantic", "designer", "developer", "module"
    ];

    $scope.getRandomWord = function() {
        //gets the random values frm the array (wordsArray) 
        //and math random returns the values btw 0-1, so the array.length will give the exact length of the word.
        $scope.randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        $scope.z = [];
        for (var j = 0; j < $scope.randomWord.length; j++) {
            //array will pushed bt an object, with key value of j i.e 0,1,2 no. of times the loop iterates,
            //and value as empty frst thn the entered value is appended to the DOM.
            $scope.z.push({ 'name': j, value: '' });
            console.log($scope.z);
        }
        console.log($scope.randomWord);

    }
    $scope.getRandomWord();


});
