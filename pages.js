/*
 |--------------------------------------------------------------------------
 | HTML Pages
 |--------------------------------------------------------------------------
 | title:       The page title
 | template:    Source to ejs file
 | filename:    Filename in public
 | topmenu:     Top menu category
 | submenu:     Sub-menu category
 */
module.exports = [
    {
        title: "siQtheme by 3M Square",
        template: "src/index.ejs",
        filename: "index.html",
        topmenu: "db",
        submenu: "dashboard1"
    }, {
        title: "siQtheme - Bootstrap Toggle",
        template: "src/cp_bstoggle.ejs",
        filename: "cp_bstoggle.html",
        topmenu: "cp",
        submenu: "cptoggle",
    }, {
        title: "siQtheme - UI Buttons",
        template: "src/ui_buttons.ejs",
        filename: "ui_buttons.html",
        topmenu: "ui",
        submenu: "uibutton",
    }, {
        title: "siQtheme - UI Typography",
        template: "src/ui_typography.ejs",
        filename: "ui_typography.html",
        topmenu: "ui",
        submenu: "uitypo"
    }, {
        title: "siQtheme - UI Cards",
        template: "src/ui_cards.ejs",
        filename: "ui_cards.html",
        topmenu: "ui",
        submenu: "uicard",
    }, {
        title: "siQtheme - UI Colors",
        template: "src/ui_colors.ejs",
        filename: "ui_colors.html",
        topmenu: "ui",
        submenu: "uicolor"
    }, {
        title: "siQtheme - Fontawesome",
        template: "src/ui_fontawesome.ejs",
        filename: "ui_fontawesome.html",
        topmenu: "ui",
        submenu: "uifa"
    }, {
        title: "siQtheme - Themify Icons",
        template: "src/ui_themify.ejs",
        filename: "ui_themify.html",
        topmenu: "ui",
        submenu: "uithemify"
    }, {
        title: "siQtheme - Bootstrap Modals",
        template: "src/ui_modals.ejs",
        filename: "ui_modals.html",
        topmenu: "ui",
        submenu: "uimodal"
    }, {
        title: "siQtheme - Toastr",
        template: "src/ui_toastr.ejs",
        filename: "ui_toastr.html",
        topmenu: "ui",
        submenu: "uitoastr"
    }, {
        title: "siQtheme - Basic Tables",
        template: "src/tb_basic.ejs",
        filename: "tb_basic.html",
        topmenu: "tb",
        submenu: "tbbasic"
    }, {
        title: "siQtheme - DataTables",
        template: "src/tb_datatables.ejs",
        filename: "tb_datatables.html",
        topmenu: "tb",
        submenu: "tbdatatables"
    }
];