angular.module('angularJs')
  .controller('MainCtrl', function($scope, $http) {
    getTask(); // Load all available tasks
    function getTask() {
      $http.post("ajax/getTask.php").success(function(data) {
        $scope.tasks = data;
      });
    };

    $scope.delete = function(index) {
      $scope.tasks.splice(index, 1);
    }
  });
