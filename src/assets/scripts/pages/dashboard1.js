var Dashboard1 = function() {

    var yearCompareChart = function() {
        var options = {
            title: {
                text: 'Years Comparison',
                align: 'left'
            },
            series: [{
                name: 'Year 2018',
                data: [2315, 1155, 2231, 2775, 1382, 2242, 3736, 2146, 4414, 2292, 3071]
            }, {
                name: 'Year 2019',
                data: [2328, 4344, 4712, 6976, 4460, 9009, 5474, 3204, 5480, 7735, 4854]
            }, {
                name: 'Year 2020',
                data: [4428, 5544, 4112, 6776, 2260, 4309, 2174, 4104, 5680, 2735, 4354]
            }],
            chart: {
                height: 350,
                type: 'area',
                foreColor: '#999999',
                toolbar: {
                    show: true,
                    tools: {
                        download: true,
                        selection: true,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        reset: false
                    }
                }
            },
            grid: {
                borderColor: '#6C757D'
            },
            stroke: {
                curve: 'smooth'
            },
            dataLabels: {
                enabled: false
            },
            labels: [
                '01/01/2019', 
                '02/01/2019', 
                '03/01/2019', 
                '04/01/2019', 
                '05/01/2019', 
                '06/01/2019', 
                '07/01/2019', 
                '08/01/2019', 
                '09/01/2019', 
                '10/01/2019', 
                '11/01/2019'
            ],
            // markers: {
            //     size: 0
            // },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                title: {
                    text: 'Revenues',
                },
                min: 0
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right'
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return "$" + y.toFixed(0) + " revenues";
                        }
                        return y;

                    }
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#mixed-chart"), options);
        chart.render();
    }

    var columnChart = function() {
        var options = {
            title: {
                text: 'Column Chart',
                align: 'left'
            },
            series: [{
                name: 'Servings',
                data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
            }],
            annotations: {
                points: [{
                    x: 'Bananas',
                    seriesIndex: 0,
                    label: {
                        borderColor: '#775DD0',
                        offsetY: 0,
                        style: {
                            color: '#fff',
                            background: '#775DD0',
                        },
                        text: 'Bananas are good',
                    }
                }]
            },
            chart: {
                height: 350,
                type: 'bar',
                foreColor: '#999999'
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                    endingShape: 'rounded'
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    color: '#fff'
                },
                categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
                    'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
                ],
                tickPlacement: 'on'
            },
            yaxis: {
                title: {
                    text: 'Servings',
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    stops: [50, 0, 100]
                },
            }
        };

        var chart = new ApexCharts(document.querySelector("#column-chart"), options);
        chart.render();
    }

    var splineChart = function() {
        var options = {
            title: {
                text: 'Spline Chart',
                align: 'left'
            },
            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
            chart: {
                height: 350,
                type: 'area',
                foreColor: '#999999'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        };

        var chart = new ApexCharts(document.querySelector("#spline-chart"), options);
        chart.render();
    }

    var sparklineChart1 = function () {
        var options = {
            series: [{
                data: [19, 48, 25, 31, 15, 77, 55, 60, 40, 67, 89]
            }],
            chart: {
                type: 'bar',
                width: 100,
                height: 45,
                sparkline: {
                    enabled: true
                }
            },
            fill: {
                colors: ['#FCD12A']
            },
            plotOptions: {
                bar: {
                    columnWidth: '80%'
                }
            },
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };

        var chart1 = new ApexCharts(document.querySelector("#sparkline-chart1"), options);
        chart1.render();
    }

    var sparklineChart2 = function () {
        var options = {
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }],
            chart: {
                type: 'bar',
                width: 100,
                height: 45,
                sparkline: {
                    enabled: true
                }
            },
            fill: {
                colors: ['#4DC3FF']
            },
            plotOptions: {
                bar: {
                    columnWidth: '80%'
                }
            },
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };

        var chart2 = new ApexCharts(document.querySelector("#sparkline-chart2"), options);
        chart2.render();
    }
    
    return {
        init: function() {
            yearCompareChart();
            columnChart();
            splineChart();
            sparklineChart1();
            sparklineChart2();
        }
    }
}();

$(function() {
    Dashboard1.init();
});