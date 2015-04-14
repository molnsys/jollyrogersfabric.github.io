angular.module( 'sample.home', [
'auth0'
])
//.controller( 'HomeCtrl', function HomeController( $scope, auth, $http, $location, store ) {

.controller( 'HomeCtrl', function HomeController( $scope, auth, $http, $location, store ) {

  $scope.auth = auth;

  $scope.callApi = function() {
    // Just call the API as you'd do using $http
  $http({
      url: 'https://api.molt.in/oauth/access_token',
      method: 'POST',
    headers: { 'grant_type': 'client_credentials',             
              'Accept': 'application/json',
             'Content-Type': 'application/x-www-form-urlencoded',
             , "client_id": "YFWE8D0RnpBHxwnyck0DjoHT0SXFP48FdArlMLMy", 
              "client_secret": "dnzIYu8GrjN87WZ9d3KvmQWuo4dE9WcQWi9o8Cyy"}   
    }).then(function() {
      alert("We got the bearer token data successfully");
    }, function(response) {
      if (response.status == 0) {
        alert("Please download the API seed so that you can call it.");
      }
      else {
        alert(response.data.access_token);
          console.log(response.data);
         }
    });     
/**   
  Post.query(function(data) {
    $scope.posts = data;
  });*/
 
      
/**     
      
var params = JSON.stringify({'grant_type': "client_credentials", 'Content-Type':'application/x-www-form-urlencoded', "client_id": "YFWE8D0RnpBHxwnyck0DjoHT0SXFP48FdArlMLMy", "client_secret": "dnzIYu8GrjN87WZ9d3KvmQWuo4dE9WcQWi9o8Cyy"});
      
    var url = "https://api.molt.in/oauth/access_token" + "?callback=JSON_CALLBACK" + params;

      
    $http.jsonp(url)
        .then(function(json) {
            $scope.response = json.data.data;
        console.log(response.data);
         console.log(json.data.data);
        });
 */     
      
/**    
var params = JSON.stringify({'X-Mashape-Key': "6DpI2WC9YbmshTmcAkJI7fsTSe0sp1LraCpjsnclhdnIqs0Gon", 'Content-Type':'application/x-www-form-urlencoded'});
      
    var url = "https://faktaochkunskap-moltin-e-commerce-v1.p.mashape.com/oauth/access_token" + "?callback=JSON_CALLBACK" + params;

      
    $http.jsonp(url)
        .then(function(json) {
            $scope.response = json.data.data;
        console.log(response.data);
         console.log(json.data.data);
        });
*/      
    /**  
    $http({
      url: 'https://faktaochkunskap-moltin-e-commerce-v1.p.mashape.com/oauth/access_token',
      method: 'POST',
    headers: { 'X-Mashape-Key': '6DpI2WC9YbmshTmcAkJI7fsTSe0sp1LraCpjsnclhdnIqs0Gon',             
              'Accept': 'application/json',
             'Content-Type': 'application/x-www-form-urlencoded'}   
    }).then(function() {
      alert("We got the bearer token data successfully");
    }, function(response) {
      if (response.status == 0) {
        alert("Please download the API seed so that you can call it.");
      }
      else {
        alert(response.data.access_token);
          console.log(response.data);
         }
    });
      */
    
      
  }
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
          
       

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $location.path('/login');
  }

});
