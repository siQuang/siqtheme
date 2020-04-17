require('peity');
const themeColor = require('../colors');

let UI_card = function () {

    var initPeityCharts = function () {
        var bubblegum = themeColor.bubblegum;
        var danger = themeColor.danger;

        var updatingChart = $('.chart1').peity('line', {
            height: 60,
            width: '100%',
            fill: bubblegum,
            stroke: null
        });

        setInterval(function () {
            var random = Math.round(Math.random() * 10)
            var values = updatingChart.text().split(",")
            values.shift()
            values.push(random)

            updatingChart
                .text(values.join(","))
                .change()
        }, 1000);

        $('.chart2').peity('bar', {
            height: 34,
            width: 60,
            fill: function (_, i, all) {
                var g = parseInt((i / all.length) * 255)
                return "rgb(255, " + g + ", 0)"
            }
        });
    }

    return {
        init: function () {
            initPeityCharts();
        }
    };
}();

$(function () {
    UI_card.init();
});