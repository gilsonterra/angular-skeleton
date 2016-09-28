app.service("TarefaService", function($http, API) {
    var _baseUrl = API.url + "tarefa/";

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

    return {
        fetch: _fetch,
        save: _save,
        find: _find
    };
});
