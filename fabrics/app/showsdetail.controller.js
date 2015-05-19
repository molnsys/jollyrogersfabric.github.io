
var app = angular.module('iprognos').filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
app.controller('ShowsDetailController', ['$scope','$stateParams', 'ShowsService', function($scope, $stateParams, ShowsService) {
    
        $scope.selectedShow = ShowsService.find($stateParams.id);
    
}]);