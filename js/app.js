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
    url: 'http://gtd.api/'
});

// app.config("$locationProvider", function($locationProvider) {
//     $locationProvider.html5Mode(true);
// });

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

app.run(function($rootScope, $location, $cookies, DTDefaultOptions, MenuService) {
    // Tradução Datables
    DTDefaultOptions.setLanguageSource('http://cdn.datatables.net/plug-ins/1.10.11/i18n/Portuguese-Brasil.json');

    $rootScope.location = $location;
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        var permissoes = '';

        if ($cookies.get('permissoes') !== undefined) {
            permissoes = JSON.parse($cookies.get('permissoes'));
        }

        if (toState.url != '/login' && (permissoes == undefined || permissoes == null)) {
            event.preventDefault();

            $rootScope.$evalAsync(function() {
                $location.path("/login");
            });
        }

        if (toState.url != '/login' && toState.url != '/logout' && permissoes.length > 0) {
            var temPermissao = permissoes.filter(function(obj) {
                return obj.state === toState.name;
            });

            if (temPermissao.length <= 0) {
                event.preventDefault();
                $rootScope.$evalAsync(function() {
                    $location.path("/login");
                });
            }
        }
    });

    $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error) {
        if (error === "Not Authorized") {
            $state.go("/login");
        }
    });
});
