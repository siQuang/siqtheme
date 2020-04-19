var UI_modals = function () {

    var handleModalColor = function () {
        $('body').on('click', '.exampleColorModal', function () {
            color = $(this).attr('data-color');

            $('#exampleColorModal').modal();
        });

        $('#exampleColorModal').on('show.bs.modal', function () {
            $(this).addClass('modal-' + color);
            $(this).find('.modal-title').text(color[0].toUpperCase() + color.substring(1) + ' Modal');
        });

        $('#exampleColorModal').on('hidden.bs.modal', function () {
            $(this).removeClass('modal-' + color);
            $(this).find('.modal-title').text('Colored Modal');
        });
    }

    var handleModalSizes = function () {
        $('body').on('click', '.exampleModalSize', function () {
            size = $(this).attr('data-size');

            $('#exampleModalSize').modal();
        });

        $('#exampleModalSize').on('show.bs.modal', function () {
            $(this).find('.modal-dialog').addClass('modal-' + size);
        });

        $('#exampleModalSize').on('hidden.bs.modal', function () {
            $(this).find('.modal-dialog').removeClass('modal-' + size);
        });
    }

    var handleVaryingModal = function () {
        $('#exampleVarying').on('show.bs.modal', function (e) {
            var button = $(e.relatedTarget);
            var recipient = button.data('recipient');
            var modal = $(this);

            modal.find('.modal-title').text('New message to ' + recipient);
            modal.find('.modal-body input').val(recipient);
        });
    }

    return {
        init: function () {

            handleModalColor();
            handleModalSizes();
            handleVaryingModal();
        }
    };

}();

$(function () {
    UI_modals.init();
});