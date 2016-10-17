app.controller("LoginController", function($scope, $cookies, $state, $location, UsuarioService) {
    $scope.usuario = '';
    $scope.btnLoginText = 'Entrar';
    $scope.btnLoginEnable = true;
    $scope.invalidLogin = false;

    $scope.login = function(email, senha) {
        $scope.invalidLogin = false;
        $scope.btnLoginText = 'Processando...';
        $scope.btnLoginEnable = false;

        UsuarioService.authentication(email, senha)
            .success(function(json) {
                if (json === null) {
                    $scope.invalidLogin = true;
                    $scope.btnLoginText = 'Entrar';
                    $scope.btnLoginEnable = true;

                } else {
                    $cookies.put("token", (new Date().getTime()).toString(36));
                    $cookies.put("email", email);
                    $cookies.put("usuario", JSON.stringify(json));
                    $cookies.put("permissoes", JSON.stringify(json.permissoes));

                    $scope.btnLoginText = 'Redirecionando...';
                    $state.go('app.projeto-list');
                }
            })
            .error(function(erro) {
                $scope.btnLoginText = 'Entrar';
                $scope.btnLoginEnable = true;
                swal("Ops!", "Aconteceu algum erro inesperado.", "error");
            });
    };
});
