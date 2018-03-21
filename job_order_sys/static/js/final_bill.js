//getting due day based on days set
$('#dataTable tr#dataa').each(function(){
    var termDays = $(this).closest('tr').find('#terms').html();
    var pcrbilldate = $(this).closest('tr').find('#pcrBill_date').val();
    var pcrDate = new Date(pcrbilldate);
    var termDayswAllowance = parseInt(termDays) + 5;
    pcrDate.setDate(pcrDate.getDate() + termDayswAllowance);
    var today = new Date();
    var dateDifference = Math.floor((pcrDate - today)/(1000 * 60 * 60 * 24));
    //var diff = Math.floor((dateDue - toDate)/(1000 * 60 * 60 * 24));
    if(dateDifference < 0){
        dateDifference = Math.abs(dateDifference);
        $(this).closest('tr').find('#final_billing').html('<i class="info circle red icon"></i><i style="color: red;">'+dateDifference+' day(s)</i>');
    }
    else{
        $(this).closest('tr').find('#final_billing').html('<i class="info circle blue icon"></i>Current');
    }
    
});