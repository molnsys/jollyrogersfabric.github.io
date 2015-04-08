angular.module( 'sample.home', [
'auth0'
])
.controller( 'HomeCtrl', function HomeController( $scope, auth, $http, $location, store ) {

  $scope.auth = auth;

  $scope.callApi = function() {
    // Just call the API as you'd do using $http
    $http({
      url: 'https://faktaochkunskap-moltin-e-commerce-v1.p.mashape.com/oauth/access_token',
      method: 'POST',
    headers: { 'X-Mashape-Key': '6DpI2WC9YbmshTmcAkJI7fsTSe0sp1LraCpjsnclhdnIqs0Gon',
              'Accept': 'application/json'}    
    }).then(function() {
      alert("We got the bearer token data successfully");
    }, function(response) {
      if (response.status == 0) {
        alert("Please download the API seed so that you can call it.");
      }
      else {
        alert(response.data);
    // get products    
         
          /**
        $http({
      url: 'https://faktaochkunskap-moltin-e-commerce-v1.p.mashape.com/v1/products/search',
      method: 'GET',
    headers: { 'X-Mashape-Key: 6DpI2WC9YbmshTmcAkJI7fsTSe0sp1LraCpjsnclhdnIqs0Gon',
              'Accept: application/json',
              'Authorization': response.data.access_token 
    }).then(function() {
      alert("We got the bearer token data successfully");
    },
     function(response) {
      if (response.status == 0) {
        alert("Please download the API seed so that you can call it.");
      }
      else {
        alert(response.data);        
          }  
      }
    });
        */  
    }      
  }

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $location.path('/login');
  }

});
