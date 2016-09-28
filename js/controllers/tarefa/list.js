app.controller("TarefaListController", function($scope, DTOptionsBuilder, DTColumnDefBuilder, DTDefaultOptions, TarefaService) {
    var listagem = function() {
        TarefaService.fetch().success(function(json) {
            $scope.tarefas = json;
        });
    };

    $scope.dtOptions = DTOptionsBuilder.newOptions();
    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];

    listagem();
});
