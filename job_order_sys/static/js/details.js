

    $("#top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
        });
        
    var leg = $('#leg').val();
    if(leg == '1'){
        $('#leg').val('No Signed Contract');
    }
    else if(leg == '2'){
        $('#leg').val('Signed Contract');
    }
    else if(leg == '3'){
        $('#leg').val('with POs');
    }
    else if(leg == '4'){
        $('#leg').val('w/o POs');
    }
    else if(leg == '5'){
        $('#leg').val('w/ COC');
    }
    else if(leg == '6'){
        $('#leg').val('w/o COC');
    }


$(document).ready(function(){
    $('textarea').attr('readonly','readonly');
    $('input[type=text]').attr('readonly','readonly');
    $('input#comment1').removeAttr('readonly');
    $('textarea#comment2').removeAttr('readonly');
    $('input[type=text]').css('margin-bottom','10px');
});