app.service("ProjetoService", function($http, API) {
    var baseUrl = API.url + '/projeto';

    var _listagem = function() {
        return $http({
            method: 'GET',
            url: baseUrl + "/listagem"
        });
    };

    return {
        listagem: _listagem
    };
});
