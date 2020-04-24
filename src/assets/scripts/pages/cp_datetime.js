var CP_datepicker = function() {

    // Handle Datepicker
    var handleDatepicker = function() {
        $('.date-input').datepicker({
            autoclose: true,
            todayHighlight: true
        });
        
        $('.date').datepicker({
            autoclose: true,
            todayHighlight: true
        });

        $('.daterange input').each(function() {
            $(this).datepicker({
                autoclose: true,
                todayHighlight: true
            });
        });

        $('.dateinline').datepicker({
            todayHighlight: true
        });

        $('.dateinline').on('changeDate', function() {
            $('#dateinline').val($('.dateinline').datepicker('getFormattedDate'));
        });
    }

    // Handle Timepicker
    var handleTimepicker = function() {
        $('.timepicker1').timepicker({
            minuteStep: 1,
            icons: {
                up: 'ti-angle-up',
                down: 'ti-angle-down'
            }
        });

        $('.timepicker2').timepicker({
            minuteStep: 1,
            showSeconds: true,
            icons: {
                up: 'ti-angle-up',
                down: 'ti-angle-down'
            }
        });

        $('.timepicker3').timepicker({
            minuteStep: 5,
            showSeconds: false,
            showMeridian: false,
            icons: {
                up: 'ti-angle-up',
                down: 'ti-angle-down'
            }
        });

        $('.timepicker4').timepicker({
            template: false,
            minuteStep: 5,
            showInputs: false
        });

        // handle icon click
        $('body').on('click', '.timepicker-btn', function(e) {
            e.preventDefault();
            $(this).parent('.input-group').find('input').timepicker('showWidget');
        });
    }

    return {
        init: function() {
            handleDatepicker();
            handleTimepicker();
        }
    }
}();

$(function() {
    CP_datepicker.init();
});