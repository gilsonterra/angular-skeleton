/*!
 * APP init
 */
var app = {};

app = angular.module("app", [
    'ui.router',
    'ngCookies',
    'ngSanitize',
    'ui.tinymce'
]);

app.constant('API', {
    url: 'http://localhost/SPA/api/public/'
});

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider.state('app', {
            url: '/app',
            templateUrl: 'views/main.html'
        })
        .state('app.projeto-list', {
            url: '/projeto/listagem',
            templateUrl: 'views/projeto/list.html',
            controller: 'ProjetoListController'
        })
        .state('app.projeto-form', {
            url: '/projeto/cadastro/:id',
            templateUrl: 'views/projeto/form.html',
            controller: 'ProjetoFormController'
        })
        .state('app.sobre', {
            url: '/sobre',
            templateUrl: 'views/sobre.html',
            controller: 'SobreController'
        })
        .state('login', {
            url: '/login',
            templateUrl: "views/login.html",
            controller: 'LoginController'
        })
        .state('logout', {
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
