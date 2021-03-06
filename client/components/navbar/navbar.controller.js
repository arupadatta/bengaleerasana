'use strict';

angular.module('bengaleerasanaApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    console.log("I am in navbar controller");
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
      {
        'title': 'Contribute Recipe',
        'link': '/recipe'
      },
		{
      'title': 'Contact Us',
      'link': '/contactus'
    }
];



    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
	  //$location.path('/');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

});
