app.controller("LogoutController", function ($cookies, $location) {
    $cookies.remove('token');
    $cookies.remove('email');
    $cookies.remove('usuario');
    $location.url('/login');
});
