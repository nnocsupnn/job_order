//getting due day based on days set
$('#dataTable tr#dataa').each(function(){
    var termDays = $(this).closest('tr').find('#terms').html();
    var pcrbilldate = $(this).closest('tr').find('#pcrBill_date').val();
    var pcrDate = new Date(pcrbilldate);
    var termDayswAllowance = parseInt(termDays) + 5;
    pcrDate.setDate(pcrDate.getDate() + termDayswAllowance);
    var today = new Date();
    var dateDifference = Math.floor((pcrDate - today)/(1000 * 60 * 60 * 24));
    console.log(dateDifference);

    let pcr_invoice = $(this).closest('tr').find('#pcr_invoice').val();
    let pcr_or = $(this).closest('tr').find('#pcr_or').val();

    //var diff = Math.floor((dateDue - toDate)/(1000 * 60 * 60 * 24));

    var no = i;
    no += 1;
    if(pcr_invoice == 0){
        //
    }
    else{
        if(pcr_or == 0){
            $(this).closest('tr').find('#final_billing').append('<i style="color: blue; font-weight: bold;">'+pcr_invoice+'<br>');
            if(dateDifference < 0){
                dateDifference = Math.abs(dateDifference);
                $(this).closest('tr').find('#final_billing').append('<div class="ui red horizontal label">'+dateDifference+' day(s)</div>');
            }
            else{
                $(this).closest('tr').find('#final_billing').append('<div class="ui blue horizontal label">Current</div>');
            }
        }
        else{
            $(this).closest('tr').find('#final_billing').append('<i style="color: blue; font-weight: bold;">'+pcr_invoice+'<br>');
            
            $(this).closest('tr').find('#final_billing').append('<div class="ui green horizontal label">PAID</div>');
             
        }

    }
    
    
    
});