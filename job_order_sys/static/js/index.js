var i = 0;
var no_nococ = 0;
var no_coc = 0;
var pcr = 0;

//sc status color coding
$('#dataTable tr td#legend').each(function(){
    var scnc = $(this).closest('tr').find('#sign_contract').val();
    if(scnc == 'nc'){
         
        $(this).closest('tr').find('#sccc').html('<i class="large red remove icon"></i>');
    }
    else if(scnc == 'sc'){

        $(this).closest('tr').find('#sccc').html('<i class="large green checkmark icon"></i>');
    }
}); 

//po status color coding
$('#dataTable tr td#legend').each(function(){
    var popo = $(this).closest('tr').find('#po').val();
    
    if(popo == '0'){
        $(this).closest('tr').find('#pop').html('<i class="large red remove icon"></i>');
    }
    else {

        $(this).closest('tr').find('#pop').html('<i class="large green checkmark icon"></i>');
        i++;
    } 
});

//coc status color coding
$('#dataTable tr td#legend').each(function(){
    var coc = $(this).closest('tr').find('#co').val();
    if(coc == 'nococ'){
        $(this).closest('tr').find('#coccc').html('<i class="large red remove icon"></i>');
        no_nococ++;
    }
    else {

        $(this).closest('tr').find('#coccc').html('<i class="large green checkmark icon"></i>');
        no_coc++;
    } 
});



//pcr status color coding
$('#dataTable tr td#legend').each(function(){
    var prcr = $(this).closest('tr').find('#pcrrrr').val();
    if(prcr == '0'){
        pcr++;
        $(this).closest('tr').find('#pccrrrrr').html('<i class="large red remove icon"></i>');
    }
    else {
        $(this).closest('tr').find('#pccrrrrr').html('<i class="large green check icon"></i>');
    } 
});

$('#dataTable tr').each(function(){
    var coc = $(this).closest('tr').find('#co').val();
    var ccoc = $(this).closest('tr').find('#cocCode').text();
    if(coc == 'nococ'){
        $('#noCoc').append('<i class="caret right icon"></i> '+ccoc+' <br>');
    }
    else{

    }
});

//assigning the count of po without querying the database
$('#poval').html(i);

//to determine the count of coc without querying database
$('#withoutcoc').html(no_nococ);
$('#withcoc').html(no_coc);
$('#pcrr').html(pcr);