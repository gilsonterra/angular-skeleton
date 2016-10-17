app.service("UsuarioService", function($http, API) {
    var _baseUrl = API.url + "usuario/";

    var _fetch = function() {
        return $http({
            method: 'GET',
            url: _baseUrl + "fetch"
        });
    };

    var _find = function(id) {
        return $http({
            method: 'GET',
            url: _baseUrl + "find/" + id
        });
    };

    var _add = function(data) {
        return $http({
            method: 'POST',
            url: _baseUrl + "add",
            data: data
        });
    };

    var _edit = function(id, data) {
        return $http({
            method: 'PUT',
            url: _baseUrl + "edit/" + id,
            data: data
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
        find: _find,
        add: _add,
        edit: _edit,
        authentication: _authentication
    };
});
