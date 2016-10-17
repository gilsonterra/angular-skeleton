app.service("AuthService", function($cookies) {
    var _hasPermission = function(state) {
        var hasPermission = false;
        var permissions = ($cookies.get('permissoes') !== undefined) ? JSON.parse($cookies.get('permissoes')) : null;

        if(permissions !== null){
            hasPermission = permissions.some(function(obj) {
                return obj.state === state;
            });
        }

        var stateAllowed = [
            'login',
            'logout'
        ].some(function(tela) {
            return state == tela;
        });

        return (stateAllowed || hasPermission) ? true : false;
    };

    return {
        hasPermission: _hasPermission,
    };
});
