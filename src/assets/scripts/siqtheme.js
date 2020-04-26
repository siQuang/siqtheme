window.jQuery = window.$ = require("jquery");
require("popper.js");
require("bootstrap");
require("datatables.net-bs4");
require("datatables.net-responsive-bs4");
window.moment = require("moment");
window.toastr = require("toastr/toastr");

const siQapp = function() {

    // handle theme switch
    var handleThemeColor = function() {
		/**
		 * get theme from localstorage
		 * 
		 * For better transition on page load
		 * remove this code block and use a
		 * server-side script to toggle the
		 * theme class on body.
		 **/
        // if (App.localStorageSupport()) {
        // 	var appTheme = localStorage.getItem('appTheme');
        // 	if (appTheme !== null || appTheme !== '') {
        // 		$('body').removeClass().addClass(appTheme);
        // 	}
        // }

        $('body').on('click', '.switch-theme', function() {
            var theme = $(this).attr('id');

            $('body').removeClass().addClass(theme);

            // store theme in localstorage
            // if (App.localStorageSupport()) {
            // 	localStorage.setItem('appTheme', theme);
            // }
        });
    }

    // handle menu active state
    var handleActiveMenu = function() {
        var classes = ['.maincat', '.tier1'];
        
        $.each(classes, function(index, value) {
            $(value + '>a').click(function () {
                if ($(this).parent().hasClass('active')) {
                    $(value).removeClass('active');
                    $(this).parent().removeClass('active');
                } else {
                    $(value).removeClass('active');
                    $(this).parent().addClass('active');
                }
            });
        });
    }

    // handle collapsed sidebar
    var handleCollapsedSidebar = function() {
        $('.toggle-sidebar-btn').click(function () {
            if ($('.grid-wrapper').hasClass('collapsed')) {
                // unpin sidebar when hovered
                $('.grid-wrapper').removeClass('collapsed');
                $('#sidebar').unbind('hover');
            } else {
                $('.grid-wrapper').addClass('collapsed');
                $('#sidebar').hover(
                    function () {
                        $('.grid-wrapper').addClass('sidebar-hovered');
                    },
                    function () {
                        $('.grid-wrapper').removeClass('sidebar-hovered');
                    }
                )

            }
            $('i', this).toggleClass('ti-arrow-circle-left ti-arrow-circle-right');
        });
    }

    // handle slidout sidebar for small screen size
    var handleSlideSidebar = function() {
        $('.slide-sidebar-btn').click(function(e) {
            e.preventDefault();

            $('.slide-sidebar-btn, .sidebar').toggleClass('open');
        });

        // close sidebar
        $('.slide-sidebar-btn.open').click(function(e) {
            e.preventDefault();
            $('.sidebar').width(0);
        });
    }

    // toggle right sidebar
    var handleRightSidebar = function() {
        $('.right-sidebar-toggle').on('click', function(e) {
            e.preventDefault();

            $('#sidebar-right').toggleClass('sidebar-open');
            $('i', this).toggleClass('ti-user ti-close');
            // $('#overlay').toggle();
        });
    }

    // handle header search animation
    var handleTopSearch = function() {
        $('#top-search').focus(function() {
            $(this).addClass('wider');
        });

        $('#top-search').blur(function() {
            $(this).removeClass('wider');
        });
    }

    // handle top-nav dropdown transition
    var handleTopBarTransition = function() {
        $('.menu-item').on('show.bs.dropdown', function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown("fast");
        });

        $('.menu-item').on('hide.bs.dropdown', function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp("fast");
        });
    }

    return {
        init: function() {

            handleThemeColor();
            handleActiveMenu();
            handleCollapsedSidebar();
            handleSlideSidebar();
            handleRightSidebar();
            handleTopSearch();
            handleTopBarTransition();

            // initialize tooltips
            $('[data-toggle="tooltip"]').tooltip();

            // initialize popovers
            $('[data-toggle="popover"]').popover();

            // close alert message
            $('#alertWrap').delay(5000).fadeTo(1000, 0.01).slideUp(500);
        }
    };

}();

$(function() {
    siQapp.init();
});
