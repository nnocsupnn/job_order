
//getting due day based on days set
$('#dataTable tr#dataa').each(function(){
    var termsDays = $(this).closest('tr').find('#terms').html();

    //invoice date vars
    let invdate1 = $(this).closest('tr').find('#invdate_1').val();
    let invdate2 = $(this).closest('tr').find('#invdate_2').val();
    let invdate3 = $(this).closest('tr').find('#invdate_3').val();
    let invdate4 = $(this).closest('tr').find('#invdate_4').val();
    let invdate5 = $(this).closest('tr').find('#invdate_5').val();
    let invdate6 = $(this).closest('tr').find('#invdate_6').val();
    let invdate7 = $(this).closest('tr').find('#invdate_7').val();
    let invdate8 = $(this).closest('tr').find('#invdate_8').val();
    let invdate9 = $(this).closest('tr').find('#invdate_9').val();
    let invdate10 = $(this).closest('tr').find('#invdate_10').val();
    let invdate11 = $(this).closest('tr').find('#invdate_11').val();
    let invdate12 = $(this).closest('tr').find('#invdate_12').val();
    let invdate13 = $(this).closest('tr').find('#invdate_13').val();

    //invoices vars
    let inv1 = $(this).closest('tr').find('#inv_1').val();
    let inv2 = $(this).closest('tr').find('#inv_2').val();
    let inv3 = $(this).closest('tr').find('#inv_3').val();
    let inv4 = $(this).closest('tr').find('#inv_4').val();
    let inv5 = $(this).closest('tr').find('#inv_5').val();
    let inv6 = $(this).closest('tr').find('#inv_6').val();
    let inv7 = $(this).closest('tr').find('#inv_7').val();
    let inv8 = $(this).closest('tr').find('#inv_8').val();
    let inv9 = $(this).closest('tr').find('#inv_9').val();
    let inv10 = $(this).closest('tr').find('#inv_10').val();
    let inv11 = $(this).closest('tr').find('#inv_11').val();
    let inv12 = $(this).closest('tr').find('#inv_12').val();
    let inv13 = $(this).closest('tr').find('#inv_13').val();

    //or vars
    let or1 = $(this).closest('tr').find('#or_1').val();
    let or2 = $(this).closest('tr').find('#or_2').val();
    let or3 = $(this).closest('tr').find('#or_3').val();
    let or4 = $(this).closest('tr').find('#or_4').val();
    let or5 = $(this).closest('tr').find('#or_5').val();
    let or6 = $(this).closest('tr').find('#or_6').val();
    let or7 = $(this).closest('tr').find('#or_7').val();
    let or8 = $(this).closest('tr').find('#or_8').val();
    let or9 = $(this).closest('tr').find('#or_9').val();
    let or10 = $(this).closest('tr').find('#or_10').val();
    let or11 = $(this).closest('tr').find('#or_11').val();
    let or12 = $(this).closest('tr').find('#or_12').val();
    let or13 = $(this).closest('tr').find('#or_13').val();

    //creates and array to store all data in single array var
    let invAll = [inv1,inv2,inv3,inv4,inv5,inv6,inv7,inv8,inv9,inv10,inv11,inv12,inv13];
    let orAll =  [or1,or2,or3,or4,or5,or6,or7,or8,or9,or10,or11,or12,or13];
    let inv_dates = [invdate1,invdate2,invdate3,invdate4,invdate5,invdate6,invdate7,invdate8,invdate9,invdate10,invdate11,invdate12,invdate13]
    
    //loop for invoice array
    for (var i = 0;i <= 12; i++) {
        
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
            $(this).closest('tr').find('#invoiceNo').append('<br>'+orAll[i]);
            if(invAll[i] != '0' && orAll[i] != '0')
            {
                $(this).closest('tr').find('#invoiceNo').append('<br>'+orAll[i]);
            }
            else{
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
            
                //getting days delayed
                var dateDue = newDate;
                var  toDate = new Date();
                var diff = Math.floor((dateDue - toDate)/(1000 * 60 * 60 * 24));
                
                //if duedate exceeds the date due it will count the due diff and notify you in the page
                if(diff < 0){
                    diff = Math.abs(diff);
                    $(this).closest('tr').find('#idCode').removeClass('vk').addClass('youtube');
                    $(this).closest('tr').find('#invoiceNo').append('<br>'+invAll[i]);
                    $(this).closest('tr').find('#invoiceNo').append("<br><i class=\"attention red icon\"></i><i style=\"color: red;\">"+diff+" day(s)</strong></i>").addClass('error');
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
    $(this).closest('tr').find('#terms').append("<br><i style=\"color: red;\">("+month +" "+ day +", " + year+")</i>");
    
});