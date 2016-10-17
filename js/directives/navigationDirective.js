app.directive("navigation", function($state, $cookies, AuthService) {
    return {
        restrict: "E",
        templateUrl: 'views/navigation.html',
        link: function(scope, element) {
            scope.menuLeft = [];
            scope.menuRight = [];
            
            var dadosUsuario = $cookies.get('usuario');
            if (dadosUsuario) {
                scope.usuario = JSON.parse(dadosUsuario);
            }

            var menuLeft = [{
                nome: 'Projeto',
                state: 'app.projeto-list'
            }, {
                nome: 'Tarefa',
                state: 'app.tarefa-list'
            }, {
                nome: 'Usuários',
                state: 'app.usuario-list'
            }];

            $.each(menuLeft, function(i, e) {
                if (AuthService.hasPermission(e.state)) {
                    scope.menuLeft.push(e);
                }
            });

            var menuRight = [{
                nome: 'Projeto',
                state: 'app.projeto-form'
            }, {
                nome: 'Tarefa',
                state: 'app.tarefa-form'
            }, {
                nome: 'Usuários',
                state: 'app.usuario-form'
            }];

            $.each(menuRight, function(i, e) {
                if (AuthService.hasPermission(e.state)) {
                    scope.menuRight.push(e);
                }
            });
        }
    };
});
