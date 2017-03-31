var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: './views/partials/main.html'
    })
    .when('/dashboard/:id', {
    	templateUrl: './views/partials/dashboard.html'
    })
    .when('/new', {
    	templateUrl: './views/partials/new.html'
    })
    .when('/poll/:id', {
    	templateUrl: './views/partials/poll.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
