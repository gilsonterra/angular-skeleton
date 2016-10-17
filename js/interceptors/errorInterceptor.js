app.factory("errorInterceptor", function($q, $location, $window) {
    return {
        responseError: function(rejection) {
            console.error(rejection);
            //$location.path("#/erro/404");
            //$window.location.href = "#/erro/500";
            // if (rejection.status === 404) {
            //     //$state.go('app.404');
            //
            // }
            return $q.reject(rejection);
        }
    };
});
