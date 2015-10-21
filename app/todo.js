angular.module('Todo', [])
  .controller('MainCtrl', function ($scope) {
    $scope.tasks = [
      {
        "id": 0,
        "title": "First task",
        "description": "Description of the first task.",
        "done": false
      },
      {
        "id": 1,
        "title": "Second task",
        "description": "Description of the second task.",
        "done": false
      }
    ]
  });
