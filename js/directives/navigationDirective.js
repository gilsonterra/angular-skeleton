app.directive("navigation", function($location) {
    return {
        restrict: "E",
        templateUrl: 'views/navigation.html',
        link: function(scope, element) {
            scope.states = {};
            scope.states.urlActive = $location.path();

            scope.menu = [{
                nome: 'Home',
                url: '/home'
            }, {
                nome: 'Sobre',
                url: '/sobre'
            }, {
                nome: 'Área',
                url: '/area'
            }, {
                nome: 'Logout',
                url: '/logout',
            }];

            $(".button-collapse").sideNav();
        }
    };
});
