app.controller("ProjetoListController", function($scope, ProjetoService) {
    var listagem = function() {
        ProjetoService.listagem().success(function(json) {
            $scope.projetos = json;
        });
    };

    listagem();
});
