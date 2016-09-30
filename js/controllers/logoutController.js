app.controller("LogoutController", function ($cookies, $location) {
    $cookies.remove('token');
    $cookies.remove('email');
    $cookies.remove('usuario');
    $cookies.remove('permissoes');
    $location.url('/login');
});
