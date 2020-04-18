var TB_datatables = function () {

    var initDatatable = function () {
        $('.init-datatable').DataTable();
    }

    var initDatatableAddRows = function () {
        var table = $('#dt-addrows').DataTable();
        var counter = 1;

        $('#btn-addrow').on('click', function (e) {
            e.preventDefault();

            table.row.add([
                counter + '.1',
                counter + '.2',
                counter + '.3',
                counter + '.4',
                counter + '.5'
            ]).draw(false);

            counter++;
        });

        // Automatically add a first row of data
        $('#btn-addrow').click();
    }

    var initEventDatatable = function () {
        var table = $('#dt-event').DataTable();

        $('#dt-event tbody').on('click', 'tr', function () {
            var data = table.row(this).data();
            alert('You clicked on ' + data[0] + '\'s row');
        });
    }

    var initMultiRowSelection = function () {
        var table = $('#dt-multirowselection').DataTable();

        $('#dt-multirowselection tbody').on('click', 'tr', function () {
            $(this).toggleClass('selected');
        });
    }

    var initRowSelection = function () {
        var table = $('#dt-rowselection').DataTable();

        $('#dt-rowselection tbody').on('click', 'tr', function () {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            }
            else {
                table.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
            }
        });

        $('.btn-deleterow').click(function () {
            table.row('.selected').remove().draw(false);
        });
    }

    var initFormInputs = function () {
        var table = $('#dt-forminputs').DataTable();

        $('.btn-forminputs').click(function () {
            var data = table.$('input, select').serialize();
            alert(
                "The following data would have been submitted to the server: \n\n" +
                data.substr(0, 120) + '...'
            );
            return false;
        });
    }

    var initShowHideColumn = function () {
        var table = $('#dt-showhidecolumn').DataTable({
            'scrollY': '200px',
            'paging': false
        });

        $('.toggle-column').change(function () {
            var column = table.column($(this).attr('data-column'));

            if ($(this).prop('checked')) {
                column.visible(true);
            }
            else {
                column.visible(false);
            }
        });
    }

    return {
        init: function () {

            initDatatable();
            initDatatableAddRows();
            initEventDatatable();
            initMultiRowSelection();
            initRowSelection();
            initFormInputs();
            initShowHideColumn();
        }
    };

}();

$(function () {
    TB_datatables.init();
});