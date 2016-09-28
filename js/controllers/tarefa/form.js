app.controller("TarefaFormController", function($scope, $stateParams, TarefaService) {

    if ($stateParams.id !== '' && $stateParams.id !== undefined) {
        TarefaService.find($stateParams.id).success(function(json) {
            $scope.tarefa = json;
        });
    }

    $scope.salvar = function(tarefa) {
        TarefaService.save(tarefa).success(function(json) {
            swal(json);
        });
    };
});
