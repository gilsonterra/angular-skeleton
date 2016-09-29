app.service("UsuarioService", function($http, API) {
    var _baseUrl = API.url + "usuario/";

    var _fetch = function() {
        return $http({
            method: 'GET',
            url: _baseUrl + "search"
        });
    };

    var _save = function(contato) {
        return $http({
            method: 'POST',
            url: _baseUrl + "save",
            data: contato
        });
    };

    var _find = function(id) {
        return $http({
            method: 'GET',
            url: _baseUrl + "search/" + id
        });
    };

    var _authentication = function(email, senha) {
        return $http({
            method: 'POST',
            url: _baseUrl + "authentication",
            data: {
                email: email,
                senha: senha
            }
        });
    };

    return {
        fetch: _fetch,
        save: _save,
        find: _find,
        authentication: _authentication
    };
});
