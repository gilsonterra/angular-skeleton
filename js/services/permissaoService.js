app.service("PermissaoService", function($http, API) {
    var _baseUrl = API.url + "permissao/";

    var _fetch = function(params) {
        return $http({
            method: 'GET',
            url: _baseUrl + "search/",
            params: params
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
        find: _find
    };
});
