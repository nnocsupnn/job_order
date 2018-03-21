//getting due day based on days set
$('#dataTable tr#dataa').each(function(){
    var pcr = $(this).closest('tr').find('#pcrrrr').val();
    var billdate = $(this).closest('tr').find('#pcrBilldate').html();
    pcr = pcr.replace("."," ");
    var months = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
    var newPcrDate = new Date(pcr);
    var newBillDate = new Date(billdate);
    var delay = Math.floor((newBillDate - newPcrDate)/(1000 * 60 * 60 * 24));
    $(this).closest('tr').find('#pcrBilldate').append('<br><i class="" style="color: red;">'+(delay - 4)+' day(s)</i>');
});