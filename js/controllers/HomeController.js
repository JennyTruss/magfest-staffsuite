app.controller('HomeController', ['$scope', 'menu', function ($scope,menu) {
  // Get info from the menu JSON
  menu.success(function (data) {
    // Get the full menu
    $scope.menu = data;

  });

  // Action to take when a menu item is clicked
  $scope.mealDetails = function () {
    $('#mainModal').modal('show');
  };
}]);
