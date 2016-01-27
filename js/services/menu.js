app.factory('menu', ['$http', function ($http) {
  return $http.get('/data/menu.json')
  .success(function (data) {
    return data;
  })
  .error(function (err) {
    return err;
  });
}])
