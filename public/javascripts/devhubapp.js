  var devhubApp = angular.module("devhubApp", []);

  function fetch() {
      $http.get('https://api.github.com/users/' + $scope.search)
      .then(successCallback, errorCallback);

  }

  devhubApp.controller('UserSearchController', function($scope, $http){
    $scope.$watch('search', function(){
      fetch();
    });
  });
