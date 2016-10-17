app.controller("UsuarioFormController", function($scope, $stateParams, UsuarioService) {
    $scope.id = $stateParams.id;
    $scope.usuario = '';

    if ($stateParams.id !== '' && $stateParams.id !== undefined) {
        UsuarioService.find($stateParams.id).success(function(json) {
            $scope.usuario = json;
        });
    }

    $scope.add = function(usuario) {
        UsuarioService.add(usuario).success(function(json) {
            swal(json);
        });
    };

    $scope.edit = function(usuario) {
        UsuarioService.edit($stateParams.id, usuario).success(function(json) {
            swal(json);
        });
    };
});
