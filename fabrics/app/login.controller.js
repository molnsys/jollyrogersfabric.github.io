'use strict';
angular.module( 'iprognos')
.controller( 'LoginCtrl',['auth','$scope', '$state', 'store', function LoginCtrl( auth,$scope, $state, store ) {

  $scope.login = function() {
    auth.signin({}, function(profile, token) {
      store.set('profile', profile);
      store.set('token', token);
    $state.go('app.fabrics');  
    }, function(error) {
      console.log('There was an error logging in', error);
    });
  };

}]);
