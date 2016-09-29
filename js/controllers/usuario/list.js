app.controller("UsuarioListController", function($scope, DTOptionsBuilder, DTColumnDefBuilder, DTDefaultOptions, UsuarioService) {
    var listagem = function() {
        UsuarioService.fetch().success(function(json) {
            $scope.usuarios = json;
        });
    };

    $scope.dtOptions = DTOptionsBuilder.newOptions();
    $scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(2).notSortable()
    ];

    listagem();
});
