
//back  to top button animation
$("#top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
    });
let sc_status = $('#SignContractStatus').val();
if(sc_status == 'sc'){
    $('#SignContractStatus').val('Signed Contract');
}
else{
    $('#SignContractStatus').val('No Signed Contract');
    $('#scLabel').append(' <i class="circle icon red"></i>');
}

$(document).ready(function(){
    $('textarea').attr('readonly','readonly');
    $('input[type=text]').attr('readonly','readonly');
    $('input#comment1').removeAttr('readonly');
    $('textarea#comment2').removeAttr('readonly');
    $('input[type=text]').css('margin-bottom','10px');
});