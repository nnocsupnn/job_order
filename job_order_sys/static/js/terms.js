//getting due day based on days set
$('#dataTable tr#dataa').each(function(){
    var termsDays = $(this).closest('tr').find('#terms').html();
    let terms = $(this).closest('tr').find('#startDate').html();
    let months = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
    terms = terms.replace("."," ");
    terms = terms.replace(","," ");
    let newDate = new Date(terms);
    
    newDate.setDate(newDate.getDate() + parseInt(termsDays));
    //console.log(code + " " + newDate);
    var month = months[newDate.getMonth()];
    var day = parseInt(newDate.getDate());
    var year = newDate.getFullYear();

    //getting days delayed
    var dateDue = newDate;
    var toDate = new Date();
    var diff = Math.floor((dateDue - toDate)/(1000 * 60 * 60 * 24));
    
    //if duedate exceeds the date due it will count the due diff and notify you in the page
    if(diff < 0){
        diff = Math.abs(diff);
        $(this).closest('tr').find('#dataa').addClass('error');
        $(this).closest('tr').find('#idCode').removeClass('vk').addClass('youtube');
        $(this).closest('tr').find('#invoiceNo').append("<br><i class=\"attention icon\"></i><i style=\"color: red;\">"+diff+" day(s) delayed.</strong></i>");
        var codee = $(this).find('#cocCode').text();
        $('#daysDelayed').append('<br><i class="caret right icon"></i>'+codee+'<br><i style="padding-left: 20px;color: red;">'+diff+" days delayed</i>");
    }
    //set jo code set to upper case
    let upp = $(this).find('#jo_Code').text().toUpperCase();
    $(this).find('#jo_Code').text(upp);
    $(this).closest('tr').find('#terms').append("<br><i style=\"color: red;\">("+month +" "+ day +", " + year+")</i>");
});