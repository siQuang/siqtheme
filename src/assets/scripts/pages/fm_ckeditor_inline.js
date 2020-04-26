var FM_ckeditor_inline = function () {

    var editorInline = function () {
        InlineEditor
            .create(document.querySelector('#editor-1'))
            .catch(error => {
                console.error(error);
            });

        InlineEditor
            .create(document.querySelector('#editor-2'))
            .catch(error => {
                console.error(error);
            });

        InlineEditor
            .create(document.querySelector('#editor-3'))
            .catch(error => {
                console.error(error);
            });
    }

    return {
        init: function () {
            editorInline();
        }
    }
}();

$(function () {
    FM_ckeditor_inline.init();
});