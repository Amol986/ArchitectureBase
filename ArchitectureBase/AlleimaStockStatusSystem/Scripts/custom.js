$(document).ready(function(){
    $('.accordion-button').click(function () {
        var $this = $(this); // Current button clicked

        // If the clicked accordion is already open, close it and change the icon
        if ($this.hasClass('active')) {
            $this.removeClass('active'); // Remove active class to change icon back to closed
        } else {
            // Open the clicked accordion and add active class for icon change
            $this.addClass('active');
        }
    });

    $('#draft').on('change', function() {
        if ($(this).is(':checked')) {
            // Apply background color when the checkbox is selected
            $('.draft').css({'background-color': '#3c3c3bcc', 'color' : '#fff'});
        } else {
            // Remove background color when the checkbox is deselected
            $('.draft').css({'background-color': '', 'color' : '#212529'});
        }
        sortingGrid()
    });

    $('#PendingApproval').on('change', function() {
        if ($(this).is(':checked')) {
            // Apply background color when the checkbox is selected
            $('.pendingapproval').css({'background-color': '#8d9b6fcc', 'color' : '#fff'});
        } else {
            // Remove background color when the checkbox is deselected
            $('.pendingapproval').css({'background-color': '', 'color' : '#212529'});
        }
        sortingGrid()
        sortingItemMaster()
    });

    $('#Rejected').on('change', function() {
        if ($(this).is(':checked')) {
            // Apply background color when the checkbox is selected
            $('.reject').css({'background-color': '#e31519cc', 'color' : '#fff'});
        } else {
            // Remove background color when the checkbox is deselected
            $('.reject').css({'background-color': '', 'color' : '#212529'});
        }
        sortingGrid()
        sortingItemMaster()
    });

    $('#Rework').on('change', function() {
        if ($(this).is(':checked')) {
            // Apply background color when the checkbox is selected
            $('.rework').css({'background-color': '#d1a31ecc', 'color' : '#fff'});
        } else {
            // Remove background color when the checkbox is deselected
            $('.rework').css({'background-color': '', 'color' : '#212529'});
        }
        sortingGrid()
        sortingItemMaster()
    });

    $('#Approved').on('change', function() {
        if ($(this).is(':checked')) {
            // Apply background color when the checkbox is selected
            $('.approval').css({'background-color': '#47ab3ccc', 'color' : '#fff'});
        } else {
            // Remove background color when the checkbox is deselected
            $('.approval').css({'background-color': '', 'color' : '#212529'});
        }
        sortingGrid()
        sortingItemMaster()
    });

    // Define the original chart configuration
    // Data for Kg and N
    const dataKg = {
        reserved: [406, 267, 1070, 683, 270, 140, 405, 260, 107, 68, 27, 145],
        utilized: [4062, 260, 107, 68, 27, 145, 40, 260, 107, 683, 27, 14],
        cancelled: [462, 60, 10, 80, 270, 145, 40, 260, 107, 683, 27, 14]
    };

    const dataN = {
        reserved: [101, 67, 270, 170, 67, 35, 101, 65, 27, 17, 6, 36],
        utilized: [1015, 65, 27, 17, 6, 36, 10, 65, 27, 170, 6, 4],
        cancelled: [115, 15, 2, 20, 67, 36, 10, 65, 27, 170, 6, 4]
    };

    // Initialize the chart
    var graph1 = Highcharts.chart('container', {
        chart: {
            zooming: {
                type: 'xy'
            },
            style: {
                fontFamily: '"Lato", sans-serif'
            }
        },
        title: {
            text: 'Trend Analysis - Reserved Vs Utilized Vs Cancelled (Items with UoM "kg")',
            align: 'center'
        },
        xAxis: [{
            categories: [
                'Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24', 'Jun-24',
                'Jul-24', 'Aug-24', 'Sep-24', 'Oct-24', 'Nov-24', 'Dec-24'
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: '#8d9b6f' // Use the first color from the array
                }
            },
            title: {
                text: 'Stock Reserved & Utilized (Kg)',
                style: {
                    color: '#8d9b6f' // Use the first color from the array
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Stock Cancelled (Kg)',
                style: {
                    color: '#e31519' // Use the first color from the array
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: '#e31519' // Use the first color from the array
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            align: 'center',
            x: 0,
            verticalAlign: 'bottom',
            y: 0,
            floating: false,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },
        credits: {
            enabled: false,
        },
        colors: ['#8d9b6f', '#47ab3c', '#e31519'],
        series: [
            {
                name: 'Reserved',
                type: 'column',
                yAxis: 1,
                data: dataKg.reserved
            },
            {
                name: 'Utilized',
                type: 'column',
                data: dataKg.utilized
            },
            {
                name: 'Cancelled',
                type: 'spline',
                data: dataKg.cancelled
            }
        ]
    });

    // Event listeners for radio buttons
    document.getElementById('flexRadioDefault1').addEventListener('change', function () {
        if (this.checked) {
            updateGraphAxis('Kg');
        }
    });

    document.getElementById('flexRadioDefault2').addEventListener('change', function () {
        if (this.checked) {
            updateGraphAxis('N');
        }
    });

    // Function to update graph axis and data
    function updateGraphAxis(uom) {
        if (uom === 'Kg') {
            graph1.yAxis[0].update({
                labels: {
                    format: '{value}'
                },
                title: {
                    text: 'Stock Reserved & Utilized (Kg)'
                }
            });
            graph1.yAxis[1].update({
                labels: {
                    format: '{value}'
                },
                title: {
                    text: 'Stock Cancelled (Kg)',
                    rotation: 270,
                    x: 20,
                    y: 0
                }
            });

            // Update the data for "Kg"
            graph1.series[0].setData(dataKg.reserved);
            graph1.series[1].setData(dataKg.utilized);
            graph1.series[2].setData(dataKg.cancelled);

            graph1.setTitle({ text: 'Trend Analysis - Reserved Vs Utilized Vs Cancelled (Items with UoM "Kg")' });

        } else if (uom === 'N') {
            graph1.yAxis[0].update({
                labels: {
                    format: '{value}'
                },
                title: {
                    text: 'Stock Reserved & Utilized (N)'
                }
            });
            graph1.yAxis[1].update({
                labels: {
                    format: '{value}'
                },
                title: {
                    text: 'Stock Cancelled (N)',
                    rotation: 270,
                    x: 20,
                    y: 0
                }
            });

            // Update the data for "N"
            graph1.series[0].setData(dataN.reserved);
            graph1.series[1].setData(dataN.utilized);
            graph1.series[2].setData(dataN.cancelled);

            graph1.setTitle({ text: 'Trend Analysis - Reserved Vs Utilized Vs Cancelled (Items with UoM "N")' });
        }
    }
    graph1.reflow();

    var graph2 = Highcharts.chart('container4', {
        chart: {
            type: 'column',
            style: {
                fontFamily: '"Lato", sans-serif'
            }
        },
        title: {
            text: ' '
        },
        credits: {
            enabled: false,
        },
        xAxis: {
            categories: ['Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24', 'Jun-24', 'Jul-24', 'Aug-24', 'Sep-24', 'Oct-24', 'Nov-24', 'Dec-24'],
            crosshair: true,
            accessibility: {
                description: 'Countries'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Days'
            }
        },
        tooltip: {
            valueSuffix: ' Days'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
            {
                name: 'Turn Around Time',
                data: [25, 30, 35, 40, 45, 80]
            },
            {
                name: 'Avg. Days to PO',
                data: [45, 35, 55, 65, 70, 90]
            }
        ]
    });
    graph2.reflow();
});

// function setHeight() {
//     windowHeight = $(window).innerHeight();
//     $('.AdvanceSearch_wrapper').css('max-height', (windowHeight - 200));
// };

function sortingGrid(){  
    if($('.statusCountSortingBox :checkbox:checked').length == 0){
        $('.statusCountSortingBox :checkbox').each(function () {
            $('.statusCountSortingGrid .'+$(this).val()).show();
        });
    }else{
        $('.statusCountSortingBox :checkbox').each(function () {
            $('.statusCountSortingGrid .'+$(this).val()).hide();
        });
        
        $('.statusCountSortingBox :checkbox:checked').each(function () {
            $('.statusCountSortingGrid .'+$(this).val()).show();
        });
    }
}

function sortingItemMaster(){  
    //alert('Came in Item Master Function')

    if($('.validateItemMasterDataBox :checkbox:checked').length == 0){
        $('.validateItemMasterDataBox :checkbox').each(function () {
            $('.validateItemMasterDataGrid tbody tr').show();
        });
    }
    else{
        $('.validateItemMasterDataBox :checkbox').each(function () {
            $('.validateItemMasterDataGrid tbody tr').hide();
        });
        
        $('.validateItemMasterDataBox :checkbox:checked').each(function () {
            $('.validateItemMasterDataGrid tbody .'+$(this).val()).show();
        });
    }
}