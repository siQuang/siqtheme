var Login = function () {

    var handleLogin = function () {
        $('#forget-password').click(function () {
            $('#login-card').hide();
            $('#forget-card').show();
        });

        $('#forget-cancel').click(function () {
            $('#login-card').show();
            $('#forget-card').hide();
        });
    }

    return {
        init: function () {

            // hide password forgotton form
            $('#forget-card').hide();

            handleLogin();
        }
    };

}();

$(function () {
    Login.init();
});