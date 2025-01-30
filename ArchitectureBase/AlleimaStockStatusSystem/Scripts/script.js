$(document).ready(function () {

    $('[data-bs-toggle="tooltip"]').each(function () {
        new bootstrap.Tooltip($(this));
    });

    // Select the specific gauge element you want to animate
    var $gauge = $(".sc-gauge1"); // Replace with a specific selector if needed
    var $b = $gauge.find(".sc-background .sc-percentageTat");
    var $v = $gauge.find(".sc-background span.sc-value");

    // Get the min and max values from the gauge
    var minVal = parseFloat($gauge.find(".sc-min").text(), 10);
    var maxVal = parseFloat($gauge.find(".sc-max").text(), 10);
    var currentVal = parseFloat($v.text(), 10);

    // Ensure currentVal does not go below minVal
    currentVal = Math.max(currentVal, minVal);

    // Calculate percentage of the max value
    var percentage = (currentVal / maxVal) * 100;

    // Animate from 0 to the calculated percentage
    $({p: 0}).animate({p: percentage}, {
        duration: 3000,
        easing: "swing",
        step: function(p) {
            // Rotate the `.sc-percentageTat` element dynamically
            $b.css({
                transform: "rotate(" + (0 + (p * 1.8)) + "deg)" // Adjust rotation based on percentage
            });
            // Update displayed value in `.sc-value` dynamically
            $v.text(((p / 100) * maxVal).toFixed(1));
        }
    });

    // Select the specific gauge element you want to animate
    var $gauge1 = $(".sc-gauge2"); // Replace with a specific selector if needed
    var $b1 = $gauge1.find(".sc-background .sc-percentageAvgPo");
    var $v1 = $gauge1.find(".sc-background span.sc-value");

    // Get the min and max values from the gauge
    var minVal1 = parseFloat($gauge1.find(".sc-min").text(), 10);
    var maxVal1 = parseFloat($gauge1.find(".sc-max").text(), 10);
    var currentVal1 = parseFloat($v1.text(), 10);

    // Ensure currentVal does not go below minVal
    currentVal1 = Math.max(currentVal1, minVal1);

    // Calculate percentage of the max value
    var percentage1 = (currentVal1 / maxVal1) * 100;

    // Animate from 0 to the calculated percentage
    $({p: 0}).animate({p: percentage1}, {
        duration: 3000,
        easing: "swing",
        step: function(p) {
            // Rotate the `.sc-percentageTat` element dynamically
            $b1.css({
                transform: "rotate(" + (0 + (p * 1.8)) + "deg)" // Adjust rotation based on percentage
            });
            // Update displayed value in `.sc-value` dynamically
            $v1.text(((p / 100) * maxVal1).toFixed(1));
        }
    });

    // Select the specific gauge element you want to animate
    var $gaugeReserved = $(".sc-gaugeReserved"); // Replace with a specific selector if needed
    var $bReserved = $gaugeReserved.find(".sc-background .sc-percentageReserved");
    var $vReserved = $gaugeReserved.find(".sc-background div.sc-value");
    var currentValReserved = parseFloat($vReserved.text(), 10);

    // Animate from 0 to the calculated percentage
    $({p: 0}).animate({p: currentValReserved}, {
        duration: 3000,
        easing: "swing",
        step: function(p) {            
            // Rotate the `.sc-percentageTat` element dynamically
            $bReserved.css({
                transform: "rotate(" + (0 + (p * 1.8)) + "deg)" // Adjust rotation based on percentage
            });

            // Update displayed value in `.sc-value` dynamically
            $vReserved.html(p.toFixed(1) + " %");
        }
    });

    // Select the specific gauge element you want to animate
    var $gaugeCancelled = $(".sc-gaugeCancelled"); // Replace with a specific selector if needed
    var $bCancelled = $gaugeCancelled.find(".sc-background .sc-percentageCancelled");
    var $vCancelled = $gaugeCancelled.find(".sc-background div.sc-value");
    var currentValCancelled = parseFloat($vCancelled.text(), 10);

    // Animate from 0 to the calculated percentage
    $({p: 0}).animate({p: currentValCancelled}, {
        duration: 3000,
        easing: "swing",
        step: function(p) {            
            // Rotate the `.sc-percentageTat` element dynamically
            $bCancelled.css({
                transform: "rotate(" + (0 + (p * 1.8)) + "deg)" // Adjust rotation based on percentage
            });

            // Update displayed value in `.sc-value` dynamically
            $vCancelled.html(p.toFixed(1) + " %");
        }
    });

    // Select the specific gauge element you want to animate
    var $gaugeInsufficient = $(".sc-gaugeInsufficient"); // Replace with a specific selector if needed
    var $bInsufficient = $gaugeInsufficient.find(".sc-background .sc-percentageInsufficient");
    var $vInsufficient = $gaugeInsufficient.find(".sc-background div.sc-value");
    var currentValInsufficient = parseFloat($vInsufficient.text(), 10);

    // Animate from 0 to the calculated percentage
    $({p: 0}).animate({p: currentValInsufficient}, {
        duration: 3000,
        easing: "swing",
        step: function(p) {            
            // Rotate the `.sc-percentageTat` element dynamically
            $bInsufficient.css({
                transform: "rotate(" + (0 + (p * 1.8)) + "deg)" // Adjust rotation based on percentage
            });

            // Update displayed value in `.sc-value` dynamically
            $vInsufficient.html(p.toFixed(1) + " %");
        }
    });

    // Select the specific gauge element you want to animate
    var $gaugeUtilized = $(".sc-gaugeUtilized"); // Replace with a specific selector if needed
    var $bUtilized = $gaugeUtilized.find(".sc-background .sc-percentageUtilized");
    var $vUtilized = $gaugeUtilized.find(".sc-background div.sc-value");
    var currentValUtilized = parseFloat($vUtilized.text(), 10);

    // Animate from 0 to the calculated percentage
    $({p: 0}).animate({p: currentValUtilized}, {
        duration: 3000,
        easing: "swing",
        step: function(p) {            
            // Rotate the `.sc-percentageTat` element dynamically
            $bUtilized.css({
                transform: "rotate(" + (0 + (p * 1.8)) + "deg)" // Adjust rotation based on percentage
            });

            // Update displayed value in `.sc-value` dynamically
            $vUtilized.html(p.toFixed(1) + " %");
        }
    });

    // $(".progressBar").each(function(){
    //     var $bar = $(this).find(".bar");
    //     var $val = $(this).find(".percentageVal span");
    //     var perc = parseFloat( $val.text(), 10);
        
    //     $({p:0}).animate({p:perc}, {
    //         duration: 3000,
    //         easing: "swing",
    //         step: function(p) {
    //         $bar.css({
    //             transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
    //             // 45 is to add the needed rotation to have the green borders at the bottom
    //         });
    //         $val.text(p.toFixed(1));
    //         }
    //     });
    // });

    // $(".sc-gauge").each(function() {
    //     var $b = $(this).find(".sc-background .sc-percentageTat");
    //     var $v = $(this).find(".sc-background span.sc-value");
        
    //     // Get the min and max values from the gauge
    //     var minVal = parseFloat($(this).find(".sc-min").text(), 10);
    //     var maxVal = parseFloat($(this).find(".sc-max").text(), 10);
    //     var currentVal = parseFloat($v.text(), 10);

    //     // Ensure currentVal does not go below minVal
    //     currentVal = Math.max(currentVal, minVal);
    //     alert("Current Value: " + currentVal)

    //     // Calculate percentage of the max value
    //     var percentage = (currentVal / maxVal) * 100;
    //     alert("Percentage Value: " + percentage)

    //     // Animate from 0 to the calculated percentage
    //     $({p: 0}).animate({p: percentage}, {
    //         duration: 3000,
    //         easing: "swing",
    //         step: function(p) {
    //             // Rotate the `.sc-percentageTat` element dynamically
    //             $b.css({
    //                 transform: "rotate(" + (45 + (p * 1.8)) + "deg)" // Adjust rotation based on percentage
    //             });
    //             // Update displayed value in `.sc-value` dynamically
    //             $v.text(((p / 100) * maxVal).toFixed(1));
    //         }
    //     });
    // });

    // $(".progressBarDay").each(function(){
    //     var $bar = $(this).find(".bar1");
    //     var $val = $(this).find("span");
    //     var perc = parseInt( $val.text(), 10);
        
    //     $({p:0}).animate({p:perc}, {
    //         duration: 3000,
    //         easing: "swing",
    //         step: function(p) {
    //         $bar.css({
    //             transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
    //             // 45 is to add the needed rotation to have the green borders at the bottom
    //         });
    //         $val.text(p|0);
    //         }
    //     });
    // });

    $('input[name="daterange"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        autoApply: true,
        locale: {
            format: 'DD-MMM-YYYY'
        }
    });

    $('input[name="requestedOnDate"]').daterangepicker({
        singleDatePicker: false,
        showDropdowns: true,
        minYear: 1901,
        autoApply: true,
        locale: {
            format: 'DD-MMM-YYYY'
        }
    });

    $('input[name="probableDate"]').daterangepicker({
        singleDatePicker: false,
        showDropdowns: true,
        minYear: 1901,
        autoApply: true,
        locale: {
            format: 'DD-MMM-YYYY'
        }
    });

    $('input[name="requestedOnDateDashboardFilter"]').daterangepicker({
        singleDatePicker: false,
        showDropdowns: true,
        minYear: 1901,
        autoApply: true,
        locale: {
            format: 'DD-MMM-YYYY'
        }
    });

    $('input[name="probableDateDashboardFilter"]').daterangepicker({
        singleDatePicker: false,
        showDropdowns: true,
        minYear: 1901,
        autoApply: true,
        locale: {
            format: 'DD-MMM-YYYY'
        }
    });

    $(".close_commonsearch").click(function () {
        $(".overlay_wrapper").toggleClass("hide")
        $(".commonSearch_popup").toggleClass("hide")
        $('body').removeClass('body-no-scroll');
    });
    
    $(".common_search_inputfunel").click(function () {
        $(".overlay_wrapper").toggleClass("hide")
        $(".commonSearch_popup").toggleClass("hide")
        $('body').addClass('body-no-scroll');
    });

    $(".toggle_ico_btn").click(function () {
        $(".expand_icon").toggleClass("hide")
        $(".collspased_icon").toggleClass("hide")
    });

    $('.selectpicker').multiselect({
        enableFiltering: true,
        nonSelectedText: 'Select',
        includeFilterClearBtn: true,
        includeSelectAllOption: true,
        templates: {
            button: '<button type="button" class="multiselect dropdown-toggle btn btn-primary" data-bs-toggle="dropdown" aria-expanded="false"><span class="multiselect-selected-text"></span></button>',
        },
    });

    $('.tagsInputa').tagsinput({
        tagClass: 'big'
    });

    $(".toggle_ico_btn").click(function () {
        $(".accordion-button").trigger('click');
    });

    // Initialize an empty array to store the IDs
    var disabledIds = [];

    // Select all disabled elements with an ID
    $(':disabled').each(function () {
        var name = $(this).attr('name');
        if (name) {
            // Get the value of the input with the given name
            //var inputValue = $('input[name="' + name + '"]').val();

            // Add the class 'disabled_wrapper' to the input with the given name
            $('input[name="' + name + '"]').closest('div').addClass('disabled_wraper');

            // Push the name to the disabledIds array
            disabledIds.push(name);
        }
    });

    // Print or use the list of IDs as needed
    console.log(disabledIds);

    // Pagination Script Code
    var rowsPerPage = 10;  // Default rows per page
    var currentPage = 1;
    var totalRecords = 0;
    var totalPages = 1;
    var sortColumn = 'id'; // Default sort column
    var sortOrder = 'asc'; // Default sort order

    // Function to get live table rows from the page
    function getTableData() {
        var rows = $('#myTable tbody tr');
        totalRecords = rows.length;
        return rows;
    }

    // Function to display the current page rows
    function displayRows() {
        var rows = getTableData();
        var start = (currentPage - 1) * rowsPerPage;
        var end = Math.min(start + rowsPerPage, totalRecords);
        rows.hide(); // Hide all rows
        rows.slice(start, end).show(); // Show only the required rows

        // Update record information
        $('#recordInfo').text('Showing ' + (start + 1) + ' - ' + end + ' of ' + totalRecords);

        // Update the page select dropdown
        $('#pageSelect').val(currentPage);
    }

    // Function to sort the table rows
    function sortTable(column, order) {
        var rows = getTableData().get();
        rows.sort(function(a, b) {
            var aVal = $(a).find('td:eq(' + column + ')').text();
            var bVal = $(b).find('td:eq(' + column + ')').text();
            if ($.isNumeric(aVal) && $.isNumeric(bVal)) {
                aVal = parseFloat(aVal);
                bVal = parseFloat(bVal);
            }
            return (order === 'asc') ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
        });
        $('#myTable tbody').append(rows);
        displayRows();
    }

    // Function to create pagination controls
    function createPagination() {
        totalPages = Math.ceil(totalRecords / rowsPerPage);
        var pageSelect = $('#pageSelect');
        pageSelect.empty();  // Clear previous options

        for (var i = 1; i <= totalPages; i++) {
            pageSelect.append('<option value="' + i + '">' + i + '</option>');
        }

        displayRows();
    }

    // Event listener for changing row count
    $('#rowCount').change(function() {
        rowsPerPage = parseInt($(this).val());
        currentPage = 1;  // Reset to first page
        createPagination();
    });

    // Event listener for the first, last, next, and previous buttons
    $('#firstPage').click(function() {
        currentPage = 1;
        displayRows();
    });

    $('#lastPage').click(function() {
        currentPage = totalPages;
        displayRows();
    });

    $('#nextPage').click(function() {
        if (currentPage < totalPages) {
            currentPage++;
            displayRows();
        }
    });

    $('#prevPage').click(function() {
        if (currentPage > 1) {
            currentPage--;
            displayRows();
        }
    });

    // Event listener for page select dropdown
    $('#pageSelect').change(function() {
        currentPage = parseInt($(this).val());
        displayRows();
    });

    // Event listener for sorting by column
    $('#myTable th').click(function() {
        var column = $(this).index(); // Get the column index
        var order = $(this).data('order'); // Get the current order

        // Toggle sort order
        order = (order === 'asc') ? 'desc' : 'asc';
        $(this).data('order', order);
        $('#myTable th').removeClass('sort-asc sort-desc');
        $(this).addClass(order === 'asc' ? 'sort-asc' : 'sort-desc');

        sortTable(column, order);
    });

    // Initialize the table and pagination
    displayRows()
    createPagination();


    // Dashboard Result Grid Table Pagination Script Code
    // Pagination Script Code
    var rowsPerPage = 10;  // Default rows per page
    var currentPage = 1;
    var totalRecords = 0;
    var totalPages = 1;
    var sortColumn = 'id'; // Default sort column
    var sortOrder = 'asc'; // Default sort order

    // Function to get live table rows from the page
    function getTableData1() {
        var rows = $('#myTable1 tbody tr');
        totalRecords = rows.length;
        return rows;
    }

    // Function to display the current page rows
    function displayRows1() {
        var rows = getTableData1();
        var start = (currentPage - 1) * rowsPerPage;
        var end = Math.min(start + rowsPerPage, totalRecords);
        rows.hide(); // Hide all rows
        rows.slice(start, end).show(); // Show only the required rows

        // Update record information
        $('#recordInfo1').text('Showing ' + (start + 1) + ' - ' + end + ' of ' + totalRecords);

        // Update the page select dropdown
        $('#pageSelect1').val(currentPage);
    }

    // Function to sort the table rows
    function sortTable1(column, order) {
        var rows = getTableData1().get();
        rows.sort(function(a, b) {
            var aVal = $(a).find('td:eq(' + column + ')').text();
            var bVal = $(b).find('td:eq(' + column + ')').text();
            if ($.isNumeric(aVal) && $.isNumeric(bVal)) {
                aVal = parseFloat(aVal);
                bVal = parseFloat(bVal);
            }
            return (order === 'asc') ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
        });
        $('#myTable1 tbody').append(rows);
        displayRows1();
    }

    // Function to create pagination controls
    function createPagination1() {
        totalPages = Math.ceil(totalRecords / rowsPerPage);
        var pageSelect = $('#pageSelect1');
        pageSelect.empty();  // Clear previous options

        for (var i = 1; i <= totalPages; i++) {
            pageSelect.append('<option value="' + i + '">' + i + '</option>');
        }

        displayRows1();
    }

    // Event listener for changing row count
    $('#rowCount1').change(function() {
        rowsPerPage = parseInt($(this).val());
        currentPage = 1;  // Reset to first page
        createPagination1();
    });

    // Event listener for the first, last, next, and previous buttons
    $('#firstPage1').click(function() {
        currentPage = 1;
        displayRows1();
    });

    $('#lastPage1').click(function() {
        currentPage = totalPages;
        displayRows1();
    });

    $('#nextPage1').click(function() {
        if (currentPage < totalPages) {
            currentPage++;
            displayRows1();
        }
    });

    $('#prevPage1').click(function() {
        if (currentPage > 1) {
            currentPage--;
            displayRows1();
        }
    });

    // Event listener for page select dropdown
    $('#pageSelect1').change(function() {
        currentPage = parseInt($(this).val());
        displayRows1();
    });

    // Event listener for sorting by column
    $('#myTable1 th').click(function() {
        var column = $(this).index(); // Get the column index
        var order = $(this).data('order'); // Get the current order

        // Toggle sort order
        order = (order === 'asc') ? 'desc' : 'asc';
        $(this).data('order', order);
        $('#myTable th').removeClass('sort-asc sort-desc');
        $(this).addClass(order === 'asc' ? 'sort-asc' : 'sort-desc');

        sortTable1(column, order);
    });

    // Initialize the table and pagination
    displayRows1()
    createPagination1();
});