
//getting due day based on days set
$('#dataTable tr#dataa').each(function(){
    var termsDays = $(this).closest('tr').find('#terms').html();

    //invoice date vars
    let invdate1 = $(this).closest('tr').find('#invdate_1').val();
    let invdate2 = $(this).closest('tr').find('#invdate_2').val();
    let invdate3 = $(this).closest('tr').find('#invdate_3').val();
    let invdate4 = $(this).closest('tr').find('#invdate_4').val();
    let invdate5 = $(this).closest('tr').find('#invdate_5').val();
 

    //invoices vars
    let inv1 = $(this).closest('tr').find('#inv_1').val();
    let inv2 = $(this).closest('tr').find('#inv_2').val();
    let inv3 = $(this).closest('tr').find('#inv_3').val();
    let inv4 = $(this).closest('tr').find('#inv_4').val();
    let inv5 = $(this).closest('tr').find('#inv_5').val();


    //or payment date
    let or1 = $(this).closest('tr').find('#or_1').val();
    let or2 = $(this).closest('tr').find('#or_2').val();
    let or3 = $(this).closest('tr').find('#or_3').val();
    let or4 = $(this).closest('tr').find('#or_4').val();
    let or5 = $(this).closest('tr').find('#or_5').val();
    
    //or 
    let orr1 = $(this).closest('tr').find('#orr_1').val();
    let orr2 = $(this).closest('tr').find('#orr_2').val();
    let orr3 = $(this).closest('tr').find('#orr_3').val();
    let orr4 = $(this).closest('tr').find('#orr_4').val();
    let orr5 = $(this).closest('tr').find('#orr_5').val();

    //creates and array to store all data in single array var
    let invAll = [inv1,inv2,inv3,inv4,inv5];
    let orAll =  [or1,or2,or3,or4,or5];
    let orNumber =  [orr1,orr2,orr3,orr4,orr5];
    let inv_dates = [invdate1,invdate2,invdate3,invdate4,invdate5]
    
    //loop for invoice array
    for (var i = 0;i <= 4; i++) {
    	if(invAll[i] == "0"){
            var terms = inv_dates[i];
            
            terms = terms.replace("."," ");
            terms = terms.replace(","," ");
        
            var months = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
            var newDate = new Date(terms);
           
            newDate.setDate(newDate.getDate() + parseInt(termsDays));
            //console.log(code + " " + newDate);
            var month = months[newDate.getMonth()];
            var day = parseInt(newDate.getDate());
            var year = newDate.getFullYear();
    	}
    	else {
           if(invAll[i] != '0' && orAll[i] != 'None')
            {
                var no = i;
                no +=1;
                var numWords = ['st','nd','rd','th','th','th','th','th','th','th','th','th','th'];    
                $('#invoiceInfoData').append('<b style="color: blue;">'+no+numWords[i]+'</b> - ('+ orNumber[i]+')<br>');
                
            }
            else{
                var terms = inv_dates[i];
                $(this).closest('tr').find('#startDate').append('<i style="font-size: 11px;color: red;">'+inv_dates[i].substr(0,8)+'<br></i>');
                terms = terms.replace("."," ");
                var months = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
                var newDate = new Date(terms);
                newDate.setDate(newDate.getDate() + parseInt(termsDays));

                //console.log(code + " " + newDate);
                var month = months[newDate.getMonth()];
                var day = parseInt(newDate.getDate());
                var year = newDate.getFullYear();

                //getting days delayed
                var dateDue = newDate;
                var  toDate = new Date();
                var diff = Math.floor((dateDue - toDate)/(1000 * 60 * 60 * 24));
                console.log(diff);
                var checkifPaid = false;
                //if duedate exceeds the date due it will count the due diff and notify you in the page
                if(diff < 0){
                    checkifPaid = true;
                    diff = Math.abs(diff);
                    $(this).closest('tr').find('#idCode').removeClass('vk').addClass('youtube');
                    $(this).closest('tr').find('#invoiceNo').append("<br><i class=\"attention red icon\"></i><i style=\"color: red;\">"+diff+" day(s)</strong></i>");
                    var codee = $(this).find('#cocCode').text();
                    $('#daysDelayed').append('<br><i class="caret right icon"></i>'+codee+'<br><i style="padding-left: 20px;color: red;">'+diff+" days delayed</i>");
                }
                else{

                    }
                }
            }
            
    		
    	}
    
    //set jo code set to upper case
    let upp = $(this).find('#jo_Code').text().toUpperCase();
    $(this).find('#jo_Code').text(upp);
    if(checkifPaid){
        $(this).closest('tr').find('#startDate').append(year);
    }
    else{
        $(this).closest('tr').find('#startDate').append('---');
    }
    //$(this).closest('tr').find('#terms').append("<br><i style=\"color: red;\">("+month +" "+ day +", " + year+")</i>");
    
});