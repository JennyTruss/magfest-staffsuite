app.controller('MenuDetailController', ['$scope', 'menu', '$stateParams', function($scope, menu, $stateParams) {
  menu.success(function(data) {
    $scope.day = data[$stateParams.dayid];
    $scope.meal = data[$stateParams.dayid].meals[$stateParams.mealid];

    console.log($scope.meal);
  });
}]);
