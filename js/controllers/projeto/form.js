app.controller("ProjetoFormController", function($scope, $stateParams, ProjetoService) {

    if ($stateParams.id !== '' && $stateParams.id !== undefined) {
        ProjetoService.find($stateParams.id).success(function(json) {
            $scope.projeto = json;
        });
    }

    $scope.salvar = function(projeto) {
        ProjetoService.save(projeto).success(function(json) {
            swal(json);
        });
    };
});
