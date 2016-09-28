app.controller("ProjetoListController", function($scope, DTOptionsBuilder, DTColumnDefBuilder, DTDefaultOptions, ProjetoService) {
    var listagem = function() {
        ProjetoService.fetch().success(function(json) {
            $scope.projetos = json;
        });
    };

    $scope.dtOptions = DTOptionsBuilder.newOptions();
    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(3).notSortable()
    ];

    listagem();
});
