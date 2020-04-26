var FM_ckeditor_document = function () {

    var editorDocument = function () {
        DecoupledEditor
            .create(document.querySelector('#editor'))
            .then(editor => {
                const toolbarContainer = document.querySelector('#editor-toolbar');

                toolbarContainer.appendChild(editor.ui.view.toolbar.element);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return {
        init: function () {
            editorDocument();
        }
    }
}();

$(function () {
    FM_ckeditor_document.init();
});