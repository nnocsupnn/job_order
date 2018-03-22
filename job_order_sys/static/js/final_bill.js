//getting due day based on days set
$('#dataTable tr#dataa').each(function(){
    var termDays = $(this).closest('tr').find('#terms').html();
    var pcrbilldate = $(this).closest('tr').find('#pcrBill_date').val();
    var pcrDate = new Date(pcrbilldate);
    var termDayswAllowance = parseInt(termDays) + 5;
    pcrDate.setDate(pcrDate.getDate() + termDayswAllowance);
    var today = new Date();
    var dateDifference = Math.floor((pcrDate - today)/(1000 * 60 * 60 * 24));

    let inv1 = $(this).closest('tr').find('#inv_1').val();
    let inv2 = $(this).closest('tr').find('#inv_2').val();
    let inv3 = $(this).closest('tr').find('#inv_3').val();
    let inv4 = $(this).closest('tr').find('#inv_4').val();
    let inv5 = $(this).closest('tr').find('#inv_5').val();

    let invAll = [inv1,inv2,inv3,inv4,inv5];
    //var diff = Math.floor((dateDue - toDate)/(1000 * 60 * 60 * 24));
    for(var i = 0;i < invAll.length;i++){
       if(invAll[i] == '0'){
        
       }
       else{
            $(this).closest('tr').find('#final_billing').append(invAll[i]+'<br>');
            if(dateDifference < 0){
                dateDifference = Math.abs(dateDifference);
                $(this).closest('tr').find('#final_billing').append('<i class="info circle red icon"></i><i style="color: red;">'+dateDifference+' day(s)</i><hr>');
            }
            else{
                $(this).closest('tr').find('#final_billing').append('<i class="info circle blue icon"></i><i style="font-weight:bold;">Current</i><br>');
            }
       }
       
    }
    
    
    
});