/*!
 * APP init
 */
var app = {};
app = angular.module("app", [
    'ui.router',
    'ngCookies',
    'ngMaterial'
]);

app.constant('API', {
    url: 'http://slim3-skeleton.local'
});

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider.state('app', {
        url: '/app',
        templateUrl: 'views/main.html'
    }).state('app.home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    }).state('app.sobre', {
        url: '/sobre',
        templateUrl: 'views/sobre.html',
        controller: 'SobreController'
    }).state('login', {
        url: '/login',
        templateUrl: "views/login.html",
        controller: 'LoginController'
    }).state('logout', {
        url: '/logout',
        controller: 'LogoutController'
    });
});

app.run(function($rootScope, $location, $cookies) {
    $rootScope.location = $location;
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
        if ($cookies.get('token') === undefined) {
            $location.path("/login");
        }
    });
});
