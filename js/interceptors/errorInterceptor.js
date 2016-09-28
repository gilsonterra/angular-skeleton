app.factory("errorInterceptor", function($q, $location) {
    return {
        responseError: function(rejection) {
            $location.path("#/error/404");
            if (rejection.status === 404) {
                //$state.go('app.404');

            }
            return $q.reject(rejection);
        }
    };
});
