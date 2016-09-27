app.directive("navigation", function($state) {
    return {
        restrict: "E",
        templateUrl: 'views/navigation.html',
        link: function(scope, element) {
            scope.menu = [{
                nome: 'Projeto',
                url: 'app.projeto-list'
            }, {
                nome: 'Sobre',
                url: 'app.sobre'
            }, {
                nome: 'Área',
                url: 'app.area'
            }, {
                nome: 'Logout',
                url: 'logout',
            }];

            scope.goTo = function(url){
                $state.go(url);
            };
        }
    };
});
