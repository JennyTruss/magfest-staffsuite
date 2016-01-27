app = angular.module('MAGSuite', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url : '/home',
    templateUrl : 'views/home.html'
  })
  .state('home.menu-details',{
    url : '/menu-details/:dayid/:mealid',
    templateUrl : 'views/menu-detail.html',
    controller : function ($scope, $stateParams, menu) {
      menu.success(function (data) {
        $scope.day = data[$stateParams.dayid];
        $scope.meal = $scope.day.meals[$stateParams.mealid];
        $scope.snack = data[data.length-1].meals[0];
      });
    }
  })
  .state('menu', {
    url : '/menu',
    templateUrl : 'views/menu.html'
  })
  .state('menu.menu-details',{
    url : '/menu-details/:dayid/:mealid',
    templateUrl : 'views/menu-detail.html',
    controller : function ($scope, $stateParams, menu) {
      menu.success(function (data) {
        $scope.day = data[$stateParams.dayid];
        $scope.meal = $scope.day.meals[$stateParams.mealid];
        $scope.snack = data[data.length-1].meals[0];
      });
    }
  })
  .state('pickup', {
    url : '/pickup',
    templateUrl : 'views/pickup.html'
  })
  .state('rules', {
    url : '/rules',
    templateUrl : 'views/rules.html'
  });
});

app.filter('renderHTML', function ($sce) {
  return function (val) {
    return $sce.trustAsHtml(val);
  };
});

app.filter('pickupStatus', function ($sce) {
  return function (val) {
    if ( val ) {
      puIcon = 'check';
      puStatus = 'success';
      puText = 'Pick Up Available';
    }
    else {
      puIcon = 'times';
      puStatus = 'danger';
      puText = 'Pick Up Unavailable';
    }

    puDisplay = '<span class="label label-' + puStatus + '"><span class="fa fa-' + puIcon + '"></span> ' + puText + '</span>';

    return $sce.trustAsHtml(puDisplay);
  };
});
