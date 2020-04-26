var FM_ckeditor_classic = function() {

    var editorClassic = function() {
        ClassicEditor
            .create(document.querySelector('#editor-1'))
            .catch(error => {
                console.error(error);
            });

        ClassicEditor
            .create(document.querySelector('#editor-2'))
            .catch(error => {
                console.error(error);
            });

        ClassicEditor
            .create(document.querySelector('#editor-3'))
            .catch(error => {
                console.error(error);
            });
    }

    return {
        init: function() {
            editorClassic();
        }
    }
}();

$(function() {
    FM_ckeditor_classic.init();
});