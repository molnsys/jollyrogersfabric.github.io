app.controller('ShowsController', ['$scope','ShowsService', function($scope, ShowsService) {
    $scope.currentPage = 1;
    $scope.pageSize = 12;
    $scope.date = new Date();
    $scope.shows = ShowsService.list();
    $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
 }]);