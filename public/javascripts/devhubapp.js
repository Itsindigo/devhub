var devhubApp = angular.module("devhubApp", []);

devhubApp.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.username = '';
  $scope.user = '';

  $scope.search = function(){
    $http.get('https://api.github.com/users/' + $scope.username)
    .then(function successCallback(response) {
        $scope.user = response.data;
      }, function errorCallback(response) {
        console.log(response);
      });
  };

}]);
