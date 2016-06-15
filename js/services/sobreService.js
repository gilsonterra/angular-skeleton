app.service("SobreService", function($http, API) {
    var baseUrl = API.url + '/cliente';

    var _info = function() {
        return $http({
            method: 'GET',
            url: baseUrl + "/fetch",
			params: {
				page: 1,
				rows: 10
			}
        });
    };

    return {
        info: _info
    };
});
