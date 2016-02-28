'use strict';

angular.module('bengaleerasanaApp')
  .controller('CarouselCtrl', function ($scope) {
    $scope.interval = 3000;
    $scope.slides = [
      {
        image: '../../../assets/images/bengaleefoods2.jpg',
        text: 'Kosha Panthar Mangsho'
      },
      {
        image: '../../../assets/images/bengaleefoods3.jpg',
        text: 'Shorshe Ilish'
      },
      {
        image: '../../../assets/images/bengaleefoods4.jpg',
        text: 'Phool Kopir Dalna'
      },
      {
        image: '../../../assets/images/bengaleefoods5.jpg',
        text: 'Bengalee Egg Curry'
      },
      {
        image: '../../../assets/images/bengaleefoods6.jpg',
        text: 'Pataler Dourma'
      },
      {
        image: '../../../assets/images/bengaleefoods7.jpg',
        text: 'Dahi Patal'
      },
      {
        image: '../../../assets/images/bengaleefoods8.jpg',
        text: 'Chingri Machher Malaicurry'
      },
      {
        image: '../../../assets/images/bengaleefoods9.jpg',
        text: 'SPicy Shorshe Ilish'
      }
    ];
  });
