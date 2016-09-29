app.controller("LoginController", function($scope, $cookies, $state, $location, UsuarioService) {
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

                $state.go('app.projeto-list');
            }
        });
    };
});
