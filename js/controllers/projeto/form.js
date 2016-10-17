app.controller("ProjetoFormController", function($scope, $stateParams, ProjetoService) {
    $scope.id = $stateParams.id;

    if ($stateParams.id !== '' && $stateParams.id !== undefined) {
        ProjetoService.find($stateParams.id).success(function(json) {
            $scope.projeto = json;
        });
    }

    $scope.add = function(projeto) {
        ProjetoService.add(projeto).success(function(json) {
            swal(json);
        });
    };

    $scope.edit = function(projeto) {
        ProjetoService.edit($stateParams.id, projeto).success(function(json) {
            swal(json);
        });
    };
});
