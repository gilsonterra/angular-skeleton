/*!
 * APP init
 */
var app = {};
app = angular.module("app", ['ngRoute', 'ngCookies', 'ngGTColorPicker']);
/*!
 * APP RUN
 */
app.run(function($rootScope, $location, $cookies) {
    $rootScope.location = $location;
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
        if ($cookies.get('token') === undefined) {
            $location.path("/login");
        }
    });
});
