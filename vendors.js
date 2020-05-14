/*
 |--------------------------------------------------------------------------
 | Vendors Assets
 |--------------------------------------------------------------------------
 | 
 */
const srcPath = 'node_modules/';
const outPath = 'public/assets/vendors/';

module.exports = [
    {
        src: srcPath + 'bootstrap/dist/css/bootstrap.min.css',
        out: outPath + 'bootstrap/bootstrap.min.css'
    }, {
        src: srcPath + 'bootstrap/dist/js/bootstrap.min.js',
        out: outPath + 'bootstrap/bootstrap.min.js'
    }, {
        src: srcPath + 'jquery/dist/jquery.min.js',
        out: outPath + 'jquery/jquery.min.js'
    }, {
        src: srcPath + 'popper.js/dist/popper.min.js',
        out: outPath + 'popperjs/popper.min.js'
    }, {
        src: srcPath + 'datatables.net-bs4/css/dataTables.bootstrap4.min.css',
        out: outPath + 'datatables-bs4/datatables.min.css'
    }, {
        src: srcPath + 'datatables.net-bs4/js/dataTables.bootstrap4.min.js',
        out: outPath + 'datatables-bs4/datatables.min.js'
    }, {
        src: srcPath + 'moment/dist/moment.js',
        out: outPath + 'moment/moment.js'
    }, {
        src: srcPath + 'simplebar/dist/simplebar.min.css',
        out: outPath + 'simplebar/simplebar.min.css'
    }, {
        src: srcPath + 'simplebar/dist/simplebar.min.js',
        out: outPath + 'simplebar/simplebar.min.js'
    }, {
        src: srcPath + 'toastr/build/toastr.min.css',
        out: outPath + 'toastr/build/toastr.min.css'
    }, {
        src: srcPath + 'toastr/build/toastr.min.js',
        out: outPath + 'toastr/toastr.min.js'
    }, {
        src: srcPath + 'bootstrap4-toggle/css/bootstrap4-toggle.min.css',
        out: outPath + 'bootstrap4-toggle/bootstrap4-toggle.min.css'
    }, {
        src: srcPath + 'bootstrap4-toggle/js/bootstrap4-toggle.min.js',
        out: outPath + 'bootstrap4-toggle/bootstrap4-toggle.min.js'
    }, {
        src: srcPath + 'bootstrap-select/dist/css/bootstrap-select.min.css',
        out: outPath + 'bootstrap-select/bootstrap-select.min.css'
    }, {
        src: srcPath + 'bootstrap-select/dist/js/bootstrap-select.min.js',
        out: outPath + 'bootstrap-select/bootstrap-select.min.js'
    }, {
        src: srcPath + 'apexcharts/dist/apexcharts.css',
        out: outPath + 'apexcharts/apexcharts.css'
    }, {
        src: srcPath + 'apexcharts/dist/apexcharts.js',
        out: outPath + 'apexcharts/apexcharts.js'
    }, {
        src: srcPath + '@ckeditor/ckeditor5-build-classic/build/ckeditor.js',
        out: outPath + 'ckeditor5/classic/ckeditor.js'
    }, {
        src: srcPath + '@ckeditor/ckeditor5-build-balloon/build/ckeditor.js',
        out: outPath + 'ckeditor5/balloon/ckeditor.js'
    }, {
        src: srcPath + '@ckeditor/ckeditor5-build-balloon-block/build/ckeditor.js',
        out: outPath + 'ckeditor5/balloon-block/ckeditor.js'
    }, {
        src: srcPath + '@ckeditor/ckeditor5-build-inline/build/ckeditor.js',
        out: outPath + 'ckeditor5/inline/ckeditor.js'
    }, {
        src: srcPath + '@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js',
        out: outPath + 'ckeditor5/decoupled-document/ckeditor.js'
    }, {
        src: srcPath + 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css',
        out: outPath + 'bootstrap-datepicker/bootstrap-datepicker.css'
    }, {
        src: srcPath + 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
        out: outPath + 'bootstrap-datepicker/bootstrap-datepicker.js'
    }, {
        src: srcPath + 'bootstrap-timepicker/css/bootstrap-timepicker.min.css',
        out: outPath + 'bootstrap-timepicker/bootstrap-timepicker.css'
    }, {
        src: srcPath + 'bootstrap-timepicker/js/bootstrap-timepicker.min.js',
        out: outPath + 'bootstrap-timepicker/bootstrap-timepicker.js'
    }, {
        src: srcPath + 'peity/jquery.peity.min.js',
        out: outPath + 'peity/jquery.peity.min.js'
    }, {
        src: srcPath + 'code-prettify/styles/desert.css',
        out: outPath + 'code-prettify/prettify.css'
    }, {
        src: srcPath + 'code-prettify/loader/run_prettify.js',
        out: outPath + 'code-prettify/prettify.js'
    }, {
        src: srcPath + 'fullcalendar/dist/fullcalendar.min.css',
        out: outPath + 'fullcalendar/fullcalendar.min.css'
    }, {
        src: srcPath + 'fullcalendar/dist/fullcalendar.min.js',
        out: outPath + 'fullcalendar/fullcalendar.min.js'
    }
];