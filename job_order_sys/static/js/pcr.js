//getting due day based on days set
$('#dataTable tr#dataa').each(function(){
    var pcr = $(this).closest('tr').find('#pcrrrr').val();
    var billdate = $(this).closest('tr').find('#pcrBilldate').html();
    pcr = pcr.replace("."," ");
    var months = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
    var newPcrDate = new Date(pcr);
    var newBillDate = new Date(billdate);
    var delay = Math.floor((newBillDate - newPcrDate)/(1000 * 60 * 60 * 24));
    delay -= 5;
    if(delay < 0){
        //console.log(delay);
    }
    else{
        delay = Math.abs(delay);
        $(this).closest('tr').find('#pcrBilldate').append('<div class="ui red horizontal label">'+(delay)+' day(s)</div>');
        console.log(delay);
    }
});