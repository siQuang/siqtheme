var FormControl = function () {

    var handleValidation1 = function () {
        $('.validate1').on('submit', function (e) {
            e.preventDefault();

            var form = $('.validate1');

            if (form[0].checkValidity === false) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.addClass('was-validated');
        });
    }

    var handleValidation2 = function () {
        $('.validate2').on('submit', function (e) {
            e.preventDefault();

            var form = $('.validate2');

            if (form[0].checkValidity === false) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.addClass('was-validated');
        });
    }

    return {
        init: function () {

            handleValidation1();
            handleValidation2();

            // initialize bootstrap-select plugin
            $('.selectpicker').selectpicker();
        }
    };

}();

$(function () {
    FormControl.init();
});
