//getting due day based on days set
$('#dataTable tr#dataa').each(function(){
    var termsDays = $(this).closest('tr').find('#terms').html();

    let invdate1 = $(this).closest('tr').find('#invdate_1').val();
    let invdate2 = $(this).closest('tr').find('#invdate_2').val();
    let invdate3 = $(this).closest('tr').find('#invdate_3').val();
    let invdate4 = $(this).closest('tr').find('#invdate_4').val();
    let invdate5 = $(this).closest('tr').find('#invdate_5').val();

    let inv_dates = [invdate1,invdate2,invdate3,invdate4,invdate5]
    
    for(var i = 0;i <= 4;i++){
        var terms = $(this).closest('tr').find('#startDate').html();
        terms = terms.replace("."," ");
        terms = terms.replace(","," ");
    
        var months = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
        var newDate = new Date(terms);
    
        newDate.setDate(newDate.getDate() + parseInt(termsDays));
        //console.log(code + " " + newDate);
        var month = months[newDate.getMonth()];
        var day = parseInt(newDate.getDate());
        var year = newDate.getFullYear();
        var due_date = "("+month+" "+day+", "+year+")";
        //getting days delayed
        var dateDue = newDate;
        var toDate = new Date();
        var diff = Math.floor((dateDue - toDate)/(1000 * 60 * 60 * 24));
        diff = Math.abs(diff);
        //if duedate exceeds the date due it will count the due diff and notify you in the page
        if(diff > 7){
            diff -= 7;
        }
    }
  
});