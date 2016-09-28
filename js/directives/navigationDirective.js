app.directive("navigation", function($state) {
    return {
        restrict: "E",
        templateUrl: 'views/navigation.html',
        link: function(scope, element) {
            scope.menu = [{
                nome: 'Projetos',
                url: 'app.projeto-list'
            }, {
                nome: 'Tarefas',
                url: 'app.tarefa-list'
            }, {
                nome: 'Logout',
                url: 'logout',
            }];

            scope.goTo = function(url) {
                $state.go(url);
            };
        }
    };
});
