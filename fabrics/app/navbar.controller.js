'use strict';

angular.module('iprognos')
  .controller('NavbarCtrl', function ($scope, auth, store, $location, $state) {

    //$scope.user = {};
    $scope.auth = auth;

    $scope.login = function() {
      auth.signin({}, function(profile, token) {
        store.set('profile', profile);
        store.set('token', token);
        $state.go('app.fabrics');    
        console.log($scope.user);
      }, function(error) {
        console.log('There was an error logging in', error);
      });
    };


    $scope.logout = function() {
      auth.signout();
      store.remove('profile');
      store.remove('token');
      $location.path('/');
    };

  });
