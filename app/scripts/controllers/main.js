angular.module('angularJs')
  .controller('MainCtrl', function($scope, $http, $location) {
    function getTask() {
      $http.post("ajax/getTask.php").success(function(data) {
        $scope.tasks = data;
      });
    };

    $scope.delete = function(task) {
      // $scope.tasks.splice(index, 1);
      if (confirm("Are you sure to delete this line?")) {
        $http.post("ajax/deleteTask.php?taskID=" + task).success(function(data) {
          getTask();
        });
      }
    }

    $scope.addTask = function (task) {
  $http.post("ajax/addTask.php?task="+task).success(function(data){
    getTask();
    $scope.taskInput = "";
  });
};

$scope.toggleStatus = function(item, status, task) {
  if(status=='2'){status='0';}else{status='2';}
    $http.post("ajax/updateTask.php?taskID="+item+"&status="+status).success(function(data){
      getTask();
    });
};
    getTask(); // Load all available tasks
  });
