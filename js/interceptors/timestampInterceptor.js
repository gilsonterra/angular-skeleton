app.factory("timestampInterceptor", function() {
    return {
        request: function(config) {
            var timestamp = new Date().getTime();
            var url = config.url;

            if (url.indexOf('view') > -1) {
                return config;
            }

            config.url = url + "?timestamp=" + timestamp;

            return config;
        }
    };
});
