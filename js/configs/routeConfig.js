app.config(function($routeProvider) {
    $routeProvider.when("/login", {
        templateUrl: "views/login.html",
        controller: "LoginController"
    });
    $routeProvider.when("/area", {
        templateUrl: "views/area.html",
        controller: "AreaController"
    });
    $routeProvider.when("/home", {
        templateUrl: "views/home.html",
        controller: "HomeController"
    });
    $routeProvider.when("/sobre", {
        templateUrl: "views/sobre.html",
        controller: "SobreController"
    });
    $routeProvider.when("/logout", {
        template: '',
        controller: "LogoutController"
    });
    $routeProvider.otherwise({
        redirectTo: "/home"
    });
});
