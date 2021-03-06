'use strict';

angular.module('bengaleerasanaApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
	
	// $scope.reload();

    $scope.awesomeThings = [];

	$scope.isValidUser=Auth.isLoggedIn();

	// $scope.isNotValidUser=Auth.isLoggedIn();

	console.log("In MainCtrl Is Valid User :"+$scope.isValidUser);

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };


  });
