angular.module('AngularDemoApp', [])
.controller("ExampleController", ['$scope', function($scope) {
  $scope.example = {
    name: $("#example_name").val(),
    email: $("#example_email").val(),
    gender: $("input[name=example\\[gender\\]]:checked").val(),
    agree: $("#example_agree").prop("checked")
  };

  $scope.update = function(example) {
    $scope.master = angular.copy(example);
  };

  $scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}]);
