$('#dataTable tr#dataa').each(function(){
    let or = $(this).closest('tr').find('#joOR').val();
    let coddd = $(this).closest('tr').find('#idCode').text();
    if(or == "0"){
        
    }
    else{
        $(this).closest('tr').find('#idCode').removeClass('vk');
        $(this).closest('tr').find('#idCode').addClass('positive');
    }


});