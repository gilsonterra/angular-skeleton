app.controller("UsuarioFormController", function($scope, $stateParams, UsuarioService) {
    if ($stateParams.id !== '' && $stateParams.id !== undefined) {
        UsuarioService.find($stateParams.id).success(function(json) {
            $scope.usuario = json;
        });
    }

    $scope.salvar = function(usuario) {
        UsuarioService.save(usuario).success(function(json) {
            swal(json);
        });
    };
});
