/*
 |--------------------------------------------------------------------------
 | Vendors Assets
 |--------------------------------------------------------------------------
 | 
 */
const srcPath = '~node_modules/';
const destPath = 'public/assets/vendors/';

module.exports = [
    {
        src: srcPath + 'bootstrap/dist/css/bootstrap.min.css',
        dest: destPath + 'bootstrap/bootstrap.min.css'
    }, {
        src: srcPath + 'bootstrap/dist/js/bootstrap.min.js',
        dest: destPath + 'bootstrap/bootstrap.min.js'
    }, {
        src: srcPath + 'jquery/dist/jquery.min.js',
        dest: destPath + 'jquery/jquery.min.js'
    }, {
        src: srcPath + 'popper.js/dist/popper.min.js',
        dest: destPath + 'popperjs/popper.min.js'
    }, {
        src: srcPath + 'datatables.net-bs4/css/dataTables.bootstrap4.min.css',
        dest: destPath + 'datatables-bs4/datatables.min.css'
    }, {
        src: srcPath + 'datatables.net-bs4/js/dataTables.bootstrap4.min.js',
        dest: destPath + 'datatables-bs4/datatables.min.js'
    }, {
        src: srcPath + 'moment/dist/moment.js',
        dest: destPath + 'moment/moment.js'
    }, {
        src: srcPath + 'simplebar/dist/simplebar.min.css',
        dest: destPath + 'simplebar/simplebar.min.css'
    }, {
        src: srcPath + 'simplebar/dist/simplebar.min.js',
        dest: destPath + 'simplebar/simplebar.min.js'
    }, {
        src: srcPath + 'toastr/build/toastr.min.css',
        dest: destPath + 'toastr/build/toastr.min.css'
    }, {
        src: srcPath + 'toastr/build/toastr.min.js',
        dest: destPath + 'toastr/toastr.min.js'
    }, {
        src: srcPath + 'bootstrap4-toggle/css/bootstrap4-toggle.min.css',
        dest: destPath + 'bootstrap4-toggle/bootstrap4-toggle.min.css'
    }, {
        src: srcPath + 'bootstrap4-toggle/js/bootstrap4-toggle.min.js',
        dest: destPath + 'bootstrap4-toggle/bootstrap4-toggle.min.js'
    }, {
        src: srcPath + 'bootstrap-select/dist/css/bootstrap-select.min.css',
        dest: destPath + 'bootstrap-select/bootstrap-select.min.css'
    }, {
        src: srcPath + 'bootstrap-select/dist/js/bootstrap-select.min.js',
        dest: destPath + 'bootstrap-select/bootstrap-select.min.js'
    }, {
        src: srcPath + 'apexcharts/dist/apexcharts.css',
        dest: destPath + 'apexcharts/apexcharts.css'
    }, {
        src: srcPath + 'apexcharts/dist/apexcharts.js',
        dest: destPath + 'apexcharts/apexcharts.js'
    }, {
        src: srcPath + '@ckeditor/ckeditor5-build-classic/build/ckeditor.js',
        dest: destPath + 'ckeditor5/classic/ckeditor.js'
    }, {
        src: srcPath + '@ckeditor/ckeditor5-build-balloon/build/ckeditor.js',
        dest: destPath + 'ckeditor5/balloon/ckeditor.js'
    }, {
        src: srcPath + '@ckeditor/ckeditor5-build-balloon-block/build/ckeditor.js',
        dest: destPath + 'ckeditor5/balloon-block/ckeditor.js'
    }, {
        src: srcPath + '@ckeditor/ckeditor5-build-inline/build/ckeditor.js',
        dest: destPath + 'ckeditor5/inline/ckeditor.js'
    }, {
        src: srcPath + '@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js',
        dest: destPath + 'ckeditor5/decoupled-document/ckeditor.js'
    }, {
        src: srcPath + 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css',
        dest: destPath + 'bootstrap-datepicker/bootstrap-datepicker.css'
    }, {
        src: srcPath + 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
        dest: destPath + 'bootstrap-datepicker/bootstrap-datepicker.js'
    }, {
        src: srcPath + 'bootstrap-timepicker/css/bootstrap-timepicker.min.css',
        dest: destPath + 'bootstrap-timepicker/bootstrap-timepicker.css'
    }, {
        src: srcPath + 'bootstrap-timepicker/js/bootstrap-timepicker.min.js',
        dest: destPath + 'bootstrap-timepicker/bootstrap-timepicker.js'
    }, {
        src: srcPath + 'peity/jquery.peity.min.js',
        dest: destPath + 'peity/jquery.peity.min.js'
    }, {
        src: srcPath + 'code-prettify/styles/desert.css',
        dest: destPath + 'code-prettify/prettify.css'
    }, {
        src: srcPath + 'code-prettify/loader/run_prettify.js',
        dest: destPath + 'code-prettify/prettify.js'
    }
];