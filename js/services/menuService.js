app.service("MenuService", function($http, API) {
    var _baseUrl = API.url + "menu/";

    var _fetch = function() {
        return $http({
            method: 'GET',
            url: _baseUrl + "search"
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
