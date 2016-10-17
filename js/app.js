/*!
 * APP init
 */
var app = {};

app = angular.module("app", [
    'ui.router',
    'ngCookies',
    'ngSanitize',
    'ui.tinymce',
    'datatables'
]);

app.constant('API', {
    url: 'http://localhost/slim3-rest-skeleton/public/'
});

// app.config("$locationProvider", function($locationProvider) {
//     $locationProvider.html5Mode(true);
// });

app.run(function($rootScope, $location, $cookies, DTDefaultOptions, AuthService) {
    // Tradução Datables
    DTDefaultOptions.setLanguageSource('http://cdn.datatables.net/plug-ins/1.10.11/i18n/Portuguese-Brasil.json');

    $rootScope.location = $location;
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        var hasPermission = AuthService.hasPermission(toState.name);

        if (!hasPermission) {
            event.preventDefault();
            $rootScope.$evalAsync(function() {
                $location.path("/login");
            });
        }
    });

    $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error) {
        if (error === "Not Authorized") {
            $state.go("/login");
        }
    });
});
