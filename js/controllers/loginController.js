app.controller("LoginController", function($scope, $cookies, $state, $location) {

    if ($cookies.get("token") !== undefined) {
        $location.path("/home");
    }

    $scope.login = function() {
        $cookies.put("token", (new Date().getTime()).toString(36));
        $state.go('app.projeto-list');
    };
});
