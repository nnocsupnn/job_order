//getting due day based on days set
$('#dataTable tr#dataa').each(function(){
    
    //var initialDate = $(this).closest('tr').find('#invoiceDatee').val();

    var invdate1 = $(this).closest('tr').find('#invdate_1').val();
    var invdate2 = $(this).closest('tr').find('#invdate_2').val();
    var invdate3 = $(this).closest('tr').find('#invdate_3').val();
    var invdate4 = $(this).closest('tr').find('#invdate_4').val();
    var invdate5 = $(this).closest('tr').find('#invdate_5').val();

    let or1 = $(this).closest('tr').find('#or_1').val();
    let or2 = $(this).closest('tr').find('#or_2').val();
    let or3 = $(this).closest('tr').find('#or_3').val();
    let or4 = $(this).closest('tr').find('#or_4').val();
    let or5 = $(this).closest('tr').find('#or_5').val();

    var initialDate = [invdate1,invdate2,invdate3,invdate4,invdate5]
    var orAll =  [or1,or2,or3,or4,or5];
    
    for(var i = 0; i < initialDate.length;i++){
        var jo_date = $(this).closest('tr').find('#jo_date').html();
        jo_date = jo_date.replace("."," ");
        var months = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
        var newJODate = new Date(jo_date);
        var newBillDate = new Date(initialDate[i]);
        var delay = Math.floor((newBillDate - newJODate)/(1000 * 60 * 60 * 24));
        
        delay -= 5;
        
        if(initialDate[i] == 'None'){
           
        }
        else{
            if(delay < 0){
                //
            }
            else{
                $(this).closest('tr').find('#startDate').append('<hr><i class="" style="color: red;">'+delay+' day(s)</i>');
            }
            
        }
    }

    
    
    
});