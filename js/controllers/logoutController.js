app.controller("LogoutController", function ($cookies, $location) {
    $cookies.remove('token');
    $location.url('/login');
});
