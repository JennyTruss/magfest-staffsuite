app.controller('MenuController', ['$scope', 'menu', function($scope, menu) {
  $scope.pageTitle = 'Menu';
  menu.success(function(data) {
    $scope.menu = data;
    
  });
}]);
