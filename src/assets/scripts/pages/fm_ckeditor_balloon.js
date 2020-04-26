var FM_ckeditor_balloon = function () {

    var editorBalloon = function () {
        BalloonEditor
            .create(document.querySelector('#editor-1'))
            .catch(error => {
                console.error(error);
            });

        BalloonEditor
            .create(document.querySelector('#editor-2'))
            .catch(error => {
                console.error(error);
            });

        BalloonEditor
            .create(document.querySelector('#editor-3'))
            .catch(error => {
                console.error(error);
            });
    }

    return {
        init: function () {
            editorBalloon();
        }
    }
}();

$(function () {
    FM_ckeditor_balloon.init();
});