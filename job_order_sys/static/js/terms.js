

$('#dataTable tr#dataa').each(function(){
    var termsDays = $(this).closest('tr').find('#terms').html();
    let terms = $(this).closest('tr').find('#startDate').html();
    let code = $(this).closest('tr').find('#cocCode').html();
    let months = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
    terms = terms.replace("."," ");
    terms = terms.replace(","," ");
    let newDate = new Date(terms);
    newDate.setDate(newDate.getDate() + parseInt(termsDays));
    //console.log(code + " " + newDate);
    var month = months[newDate.getMonth()];
    var day = parseInt(newDate.getDate());
    var year = newDate.getFullYear();
    $(this).closest('tr').find('#terms').append("<br><i style=\"color: red;\">("+month +" "+ day +", " + year+")</i>");
});