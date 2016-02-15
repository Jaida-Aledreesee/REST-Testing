angular.module('ionicApp', [])

.controller('MainCtrl', function($scope, $http) {
  $http.get('http://skyhi.cloudapp.net:8000/todo/1').then(function(resp) {
    $scope.lists = resp.data.lists;
    $scope.$apply();
    console.log(resp.data);
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
});
