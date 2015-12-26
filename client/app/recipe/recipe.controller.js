	'use strict';

	angular.module('bengaleerasanaApp')
	  .controller('RecipeCtrl', function ($scope, Auth, RecipeSvc) {

		  var currentuser= '';



		  $scope.submit = function() {
				if ($scope.recipename) {
					currentuser = Auth.getCurrentUser()._id;
				 console.log('currentuser :'+currentuser);
				  console.log('name :'+Auth.getCurrentUser().name);
				  console.log('email :'+Auth.getCurrentUser().email);
				  console.log('Auth.getCurrentUser() :'+Auth.getCurrentUser());

			//	   Auth.getCurrentUser().then(function(result){
			  // do something with result; result should be your currentUser
				//console.log('reslt :'+result);
			 //});

          RecipeSvc.create({
              recipename: $scope.recipename,
              description:$scope.description,
              indgredients:$scope.indgredients,
              videopath:$scope.videopath,
              userid:currentuser
					  })
					  .success(function (exam_question) {
						$scope.recipename = null
						$scope.description = null
						$scope.indgredients = null
						$scope.videopath = null
					  });
				}
		  };	//top addQuestions
	  });


	  angular.module('bengaleerasanaApp').service('RecipeSvc', function ($http) {
	  this.create = function (recipe) {
      console.log('I am in in the service');
		return $http.post('/api/recipe', recipe)
	  };
	});
