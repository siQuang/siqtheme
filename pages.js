let themeName       = "siQtheme",
    sourcePath      = "src/",
    dashboardMenu   = "db",
    componentsMenu  = "cp",
    uiElementsMenu  = "ui",
    tablesMenu      = "tb",
    formsMenu       = "fm",
    chartsMenu      = "ch",
    pagesMenu       = "pg";

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
        title:      themeName + " by 3M Square",
        template:   sourcePath + "index.ejs",
        filename:   "index.html",
        topmenu:    dashboardMenu,
        submenu:    "dashboard1"
    }, {
        title:      themeName + " - Date Time Picker",
        template:   sourcePath + componentsMenu + "_datetime.ejs",
        filename:   componentsMenu + "_datetime.html",
        topmenu:    componentsMenu,
        submenu:    componentsMenu + "datetime",
    }, {
        title:      themeName + " - Bootstrap Toggle",
        template:   sourcePath + componentsMenu + "_bstoggle.ejs",
        filename:   componentsMenu + "_bstoggle.html",
        topmenu:    componentsMenu,
        submenu:    componentsMenu + "toggle",
    }, {
        title:      themeName + " - UI Buttons",
        template:   sourcePath + uiElementsMenu + "_buttons.ejs",
        filename:   uiElementsMenu + "_buttons.html",
        topmenu:    uiElementsMenu,
        submenu:    uiElementsMenu + "button",
    }, {
        title:      themeName + " - UI Typography",
        template:   sourcePath + "ui_typography.ejs",
        filename:   "ui_typography.html",
        topmenu:    uiElementsMenu,
        submenu:    "uitypo"
    }, {
        title:      themeName + " - UI Cards",
        template:   sourcePath + uiElementsMenu + "_cards.ejs",
        filename:   uiElementsMenu + "_cards.html",
        topmenu:    uiElementsMenu,
        submenu:    uiElementsMenu + "card",
    }, {
        title:      themeName + " - UI Colors",
        template:   sourcePath + uiElementsMenu + "_colors.ejs",
        filename:   uiElementsMenu + "_colors.html",
        topmenu:    uiElementsMenu,
        submenu:    uiElementsMenu + "color"
    }, {
        title:      themeName + " - Fontawesome",
        template:   sourcePath + uiElementsMenu + "_fontawesome.ejs",
        filename:   uiElementsMenu + "_fontawesome.html",
        topmenu:    uiElementsMenu,
        submenu:    uiElementsMenu + "fa"
    }, {
        title:      themeName + " - Themify Icons",
        template:   sourcePath + uiElementsMenu + "_themify.ejs",
        filename:   uiElementsMenu + "_themify.html",
        topmenu:    uiElementsMenu,
        submenu:    uiElementsMenu + "themify"
    }, {
        title:      themeName + " - Bootstrap Modals",
        template:   sourcePath + uiElementsMenu + "_modals.ejs",
        filename:   uiElementsMenu + "_modals.html",
        topmenu:    uiElementsMenu,
        submenu:    uiElementsMenu + "modal"
    }, {
        title:      themeName + " - Toastr",
        template:   sourcePath + uiElementsMenu + "_toastr.ejs",
        filename:   uiElementsMenu + "_toastr.html",
        topmenu:    uiElementsMenu,
        submenu:    uiElementsMenu + "toastr"
    }, {
        title:      themeName + " - Basic Tables",
        template:   sourcePath + tablesMenu + "_basic.ejs",
        filename:   tablesMenu + "_basic.html",
        topmenu:    tablesMenu,
        submenu:    tablesMenu + "basic"
    }, {
        title:      themeName + " - DataTables",
        template:   sourcePath + tablesMenu + "_datatables.ejs",
        filename:   tablesMenu + "_datatables.html",
        topmenu:    tablesMenu,
        submenu:    tablesMenu + "datatables"
    }, {
        title:      themeName + " - Form Control",
        template:   sourcePath + formsMenu + "_control.ejs",
        filename:   formsMenu + "_control.html",
        topmenu:    formsMenu,
        submenu:    formsMenu + "control"
    }, {
        title:      themeName + " - CKEditor Classic",
        template:   sourcePath + formsMenu + "_ckeditor_classic.ejs",
        filename:   formsMenu + "_ckeditor_classic.html",
        topmenu:    formsMenu,
        submenu:    formsMenu + "ckeditor",
        submenu2:   formsMenu + "ckeditorclassic"
    }, {
        title:      themeName + " - CKEditor Balloon",
        template:   sourcePath + formsMenu + "_ckeditor_balloon.ejs",
        filename:   formsMenu + "_ckeditor_balloon.html",
        topmenu:    formsMenu,
        submenu:    formsMenu + "ckeditor",
        submenu2:   formsMenu + "ckeditorballoon"
    }, {
        title:      themeName + " - CKEditor Balloon Block",
        template:   sourcePath + formsMenu + "_ckeditor_block.ejs",
        filename:   formsMenu + "_ckeditor_block.html",
        topmenu:    formsMenu,
        submenu:    formsMenu + "ckeditor",
        submenu2:   formsMenu + "ckeditorblock"
    }, {
        title:      themeName + " - CKEditor Inline",
        template:   sourcePath + formsMenu + "_ckeditor_inline.ejs",
        filename:   formsMenu + "_ckeditor_inline.html",
        topmenu:    formsMenu,
        submenu:    formsMenu + "ckeditor",
        submenu2:   formsMenu + "ckeditorinline"
    }, {
        title:      themeName + " - CKEditor Document",
        template:   sourcePath + formsMenu + "_ckeditor_document.ejs",
        filename:   formsMenu + "_ckeditor_document.html",
        topmenu:    formsMenu,
        submenu:    formsMenu + "ckeditor",
        submenu2:   formsMenu + "ckeditordocument"
    }, {
        title:      themeName + " - Apex Charts",
        template:   sourcePath + chartsMenu + "_apexcharts.ejs",
        filename:   chartsMenu + "_apexcharts.html",
        topmenu:    chartsMenu,
        submenu:    chartsMenu + "apex"
    }, {
        title:      themeName + " - Login",
        template:   sourcePath + pagesMenu + "_login.ejs",
        filename:   pagesMenu + "_login.html",
        topmenu:    pagesMenu,
        submenu:    pagesMenu + "login"
    }, {
        title: themeName + " Documentation",
        template: sourcePath + "documentation.ejs",
        filename: "documentation.html",
        topmenu: 'dc',
        submenu: "documentation"
    }, {
        title: themeName + " FullCalendar",
        template: sourcePath + "ex_calendar.ejs",
        filename: "ex_calendar.html",
        topmenu: 'ca',
        submenu: "calendar"
    }
];