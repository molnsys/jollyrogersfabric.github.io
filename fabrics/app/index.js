var app = angular.module('iprognos', ['auth0','angular-storage','schemaForm','angular-loading-bar','angular-jwt','ngCookies','ui.router', 'restangular','common.fabric','common.fabric.utilities','common.fabric.constants','ngFileUpload','ngAnimate','angularUtils.directives.dirPagination','ui.bootstrap']);

app.config(function($stateProvider ,authProvider, $locationProvider,$urlRouterProvider, RestangularProvider, jwtInterceptorProvider,$httpProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('app',{
        url: '/',
        views: {
            'header': {
                templateUrl: 'app/templates/partials/header.html',
                controller: 'NavbarCtrl'
            },
            'content': {
                templateUrl: 'app/templates/partials/content.html',
                controller: 'NavbarCtrl'

            },
            'footer': {
                templateUrl: 'app/templates/partials/footer.html'
            }
        }

    })

    .state('app.signin', {
        url: 'signin',
        views: {
            'content@': {
                templateUrl: 'app/templates/partials/login.html',
                controller: 'LoginCtrl'
            }
        }

    })
  .state('app.example', {
        url: 'example',
        views: {
            'content@': {
                templateUrl: 'app/templates/partials/example.html',
                controller: 'ExampleCtrl'
            }
        },
        data: {
          requiresLogin: true
      }

    })

 .state('app.fabrics', {
        url: 'fabrics',
        views: {
            'content@': {
                templateUrl: 'app/templates/partials/fabrics.html',
                controller: 'FabricsCtrl'
            }
        }/**,
        data: {
          requiresLogin: true
      }*/

    });

  authProvider.init({
      domain: 'jollyrogers.auth0.com',
      clientID: 'Tgy23mCfBVF7w2bNFINDsJLmHBdZaihE',
      loginState: 'app.signin'
    });


    jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('token');
    };


    // set default header "token"
    //RestangularProvider.setDefaultHeaders({test: 'x-restangular'});
   $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    RestangularProvider.setBaseUrl('http://nodejs-jollyrogers.rhcloud.com');
  /**  RestangularProvider.setDefaultHeaders({
"Content-Type": "application/json",
"X-Requested-With": "XMLHttpRequest"
});*/
  // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
  // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
  // want to check the delegation-token example
  $httpProvider.interceptors.push('jwtInterceptor');
})
.run(function($rootScope, auth, store, jwtHelper, $state) {
    $rootScope.$on('$locationChangeStart', function() {
      if (!auth.isAuthenticated) {
        var token = store.get('token');
        if (token) {
          if (!jwtHelper.isTokenExpired(token)) {
            auth.authenticate(store.get('profile'), token);

              $state.go('app.fabrics');
          } else {
            $state.go('app.signin');
          }
        }
      }

    });
  });
