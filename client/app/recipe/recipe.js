'use strict';

angular.module('bengaleerasanaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/recipe', {
        templateUrl: 'app/recipe/recipe.html',
        controller: 'RecipeCtrl'
      });
  });
