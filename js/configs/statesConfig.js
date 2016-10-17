app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider.state('app', {
            url: '',
            templateUrl: 'views/main.html'
        })
        .state('app.404', {
            url: '/erro/404',
            templateUrl: 'views/404.html'
        })
        .state('app.500', {
            url: '/erro/500',
            templateUrl: 'views/500.html'
        })
        .state('app.projeto-list', {
            url: '/projeto/listagem',
            templateUrl: 'views/projeto/list.html',
            controller: 'ProjetoListController'
        })
        .state('app.usuario-form', {
            url: '/usuario/cadastro/:id',
            templateUrl: 'views/usuario/form.html',
            controller: 'UsuarioFormController'
        })
        .state('app.usuario-list', {
            url: '/usuario/listagem',
            templateUrl: 'views/usuario/list.html',
            controller: 'UsuarioListController'
        })
        .state('app.projeto-form', {
            url: '/projeto/cadastro/:id',
            templateUrl: 'views/projeto/form.html',
            controller: 'ProjetoFormController'
        })
        .state('app.tarefa-list', {
            url: '/tarefa/listagem',
            templateUrl: 'views/tarefa/list.html',
            controller: 'TarefaListController'
        })
        .state('app.tarefa-form', {
            url: '/tarefa/cadastro/:id',
            templateUrl: 'views/tarefa/form.html',
            controller: 'TarefaFormController'
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

    $urlRouterProvider.otherwise('/projeto/listagem');
    //$locationProvider.html5Mode(true);
});
