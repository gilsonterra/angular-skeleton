app.controller("LoginController", function($scope, $cookies, $state, $location, UsuarioService, PermissaoService) {
    $scope.usuario = '';
    $scope.invalidLogin = false;

    if ($cookies.get("token") !== undefined) {
        $location.path("/home");
    }

    $scope.login = function(email, senha) {
        $scope.invalidLogin = false;
        UsuarioService.authentication(email, senha).success(function(json){
            if(json === null){
                $scope.invalidLogin = true;
            }
            else{
                $cookies.put("token", (new Date().getTime()).toString(36));
                $cookies.put("email", email);
                $cookies.put("usuario", JSON.stringify(json));

                PermissaoService.fetch({grupo_id: json.grupo_id}).success(function(json){
                    $cookies.put("permissoes", JSON.stringify(json));
                });

                $state.go('app.projeto-list');
            }
        });
    };
});
