let themeName       = "siQtheme",
    sourcePath      = "src/",
    dashboardMenu   = "db",
    componentsMenu  = "cp",
    uiElementsMenu  = "ui",
    tablesMenu      = "tb",
    formsMenu       = "fm",
    chartsMenu      = "ch";

/*
 |--------------------------------------------------------------------------
 | HTML Pages
 |--------------------------------------------------------------------------
 | title:       The page title
 | template:    Source filename (ejs file)
 | filename:    HTML filename with extension [.html]
 | topmenu:     Top menu category
 | submenu:     Submenu name (unique)
 | submenu2:    (Optional) Submenu2 name (unique)
 */
module.exports = [
    {
        title: themeName + " by 3M Square",
        template: sourcePath + "index.ejs",
        filename: "index.html",
        topmenu: dashboardMenu,
        submenu: "dashboard1"
    }, {
        title: themeName + " - Date Time Picker",
        template: sourcePath + "cp_datetime.ejs",
        filename: "cp_datetime.html",
        topmenu: componentsMenu,
        submenu: "cpdatetime",
    }, {
        title: themeName + " - Bootstrap Toggle",
        template: sourcePath + "cp_bstoggle.ejs",
        filename: "cp_bstoggle.html",
        topmenu: componentsMenu,
        submenu: "cptoggle",
    }, {
        title: themeName + " - UI Buttons",
        template: sourcePath + "ui_buttons.ejs",
        filename: "ui_buttons.html",
        topmenu: uiElementsMenu,
        submenu: "uibutton",
    }, {
        title: themeName + " - UI Typography",
        template: sourcePath + "ui_typography.ejs",
        filename: "ui_typography.html",
        topmenu: uiElementsMenu,
        submenu: "uitypo"
    }, {
        title: themeName + " - UI Cards",
        template: sourcePath + "ui_cards.ejs",
        filename: "ui_cards.html",
        topmenu: uiElementsMenu,
        submenu: "uicard",
    }, {
        title: themeName + " - UI Colors",
        template: sourcePath + "ui_colors.ejs",
        filename: "ui_colors.html",
        topmenu: uiElementsMenu,
        submenu: "uicolor"
    }, {
        title: themeName + " - Fontawesome",
        template: sourcePath + "ui_fontawesome.ejs",
        filename: "ui_fontawesome.html",
        topmenu: uiElementsMenu,
        submenu: "uifa"
    }, {
        title: themeName + " - Themify Icons",
        template: sourcePath + "ui_themify.ejs",
        filename: "ui_themify.html",
        topmenu: uiElementsMenu,
        submenu: "uithemify"
    }, {
        title: themeName + " - Bootstrap Modals",
        template: sourcePath + "ui_modals.ejs",
        filename: "ui_modals.html",
        topmenu: uiElementsMenu,
        submenu: "uimodal"
    }, {
        title: themeName + " - Toastr",
        template: sourcePath + "ui_toastr.ejs",
        filename: "ui_toastr.html",
        topmenu: uiElementsMenu,
        submenu: "uitoastr"
    }, {
        title: themeName + " - Basic Tables",
        template: sourcePath + "tb_basic.ejs",
        filename: "tb_basic.html",
        topmenu: tablesMenu,
        submenu: "tbbasic"
    }, {
        title: themeName + " - DataTables",
        template: sourcePath + "tb_datatables.ejs",
        filename: "tb_datatables.html",
        topmenu: tablesMenu,
        submenu: "tbdatatables"
    }, {
        title: themeName + " - Form Control",
        template: sourcePath + "fm_control.ejs",
        filename: "fm_control.html",
        topmenu: formsMenu,
        submenu: "fmcontrol"
    }, {
        title: themeName + " - CKEditor Classic",
        template: sourcePath + "fm_ckeditor_classic.ejs",
        filename: "fm_ckeditor_classic.html",
        topmenu: formsMenu,
        submenu: "fmckeditor",
        submenu2: 'fmckeditorclassic'
    }, {
        title: themeName + " - CKEditor Balloon",
        template: sourcePath + "fm_ckeditor_balloon.ejs",
        filename: "fm_ckeditor_balloon.html",
        topmenu: formsMenu,
        submenu: "fmckeditor",
        submenu2: 'fmckeditorballoon'
    }, {
        title: themeName + " - CKEditor Balloon Block",
        template: sourcePath + "fm_ckeditor_block.ejs",
        filename: "fm_ckeditor_block.html",
        topmenu: formsMenu,
        submenu: "fmckeditor",
        submenu2: 'fmckeditorblock'
    }, {
        title: themeName + " - CKEditor Inline",
        template: sourcePath + "fm_ckeditor_inline.ejs",
        filename: "fm_ckeditor_inline.html",
        topmenu: formsMenu,
        submenu: "fmckeditor",
        submenu2: 'fmckeditorinline'
    }, {
        title: themeName + " - CKEditor Document",
        template: sourcePath + "fm_ckeditor_document.ejs",
        filename: "fm_ckeditor_document.html",
        topmenu: formsMenu,
        submenu: "fmckeditor",
        submenu2: 'fmckeditordocument'
    }, {
        title: themeName + " - Apex Charts",
        template: sourcePath + "ch_apexcharts.ejs",
        filename: "ch_apexcharts.html",
        topmenu: chartsMenu,
        submenu: "chapex"
    }
];