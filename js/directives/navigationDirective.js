app.directive("navigation", function($state, $cookies, MenuService) {
    return {
        restrict: "E",
        templateUrl: 'views/navigation.html',
        link: function(scope, element) {
            MenuService.fetch().success(function(json) {
                scope.menu = json;
            });

            scope.usuario = JSON.parse($cookies.get('usuario'));
        }
    };
});
