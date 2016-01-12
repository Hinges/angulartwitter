var app = angular.module('builtInApp', []);
var i = 0;
app.controller('MainController', ['$scope', '$http', function($scope, $http){

    $scope.data = {
        myLink: "http://www.twitter.com/signup/",
    }
    $scope.pickName = function () {
        $http({
            method: 'GET',
            url: '/getAdj'
        }).then(function (response) {
            i = randomNumber(0, response.data.length-1);
            $scope.adjective = response.data[i].word;
            });

        $http({
            method: 'GET',
            url: '/getNoun'
        }).then(function (response) {
            i = randomNumber(0, response.data.length-1);
            $scope.nouns = response.data[i].word;
            });
    };


}]);

var randomNumber = function(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min );
};








