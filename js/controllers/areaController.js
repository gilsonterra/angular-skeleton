app.controller("AreaController", function ($scope) {
    $scope.areasCadastradas = [];
    $scope.area = {};

    $scope.persistir = function(){
        $scope.areasCadastradas.push($scope.area);
        $scope.area = {};
    };
});
