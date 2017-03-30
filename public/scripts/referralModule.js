var app = angular.module('referralModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/landing', {
      controller: 'referralCtrl',
      templateUrl: '../views/landing.html'
    })
    .when('/link', {
      controller: 'referralCtrl',
      templateUrl: '../views/link.html'
    })

.otherwise({redirectTo: '/landing'});

$locationProvider.hashPrefix('');

});
