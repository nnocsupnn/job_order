let invoicee = 0;
let count__or = 0;
$('#dataTable tr#dataa').each(function(){
    let or = $(this).closest('tr').find('#joOR').val();
    let coddd = $(this).closest('tr').find('#idCode').text();

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

    //loop for invoice array
    for (var i = 0;i <= 12; i++) {
    	if(invAll[i] == 0){
    		
    	}
    	else {
    		invoicee++;
    	}
    }

    //loop for or array
    for (var i = 0;i <= 12; i++) {
    	if(orAll[i] == 0){
    		
    	}
    	else {
    		count__or = count__or + 1;
    	}
    }

    if (invoicee == count__or) {
    	$(this).closest('tr').find('#invoiceNo').append('<br><i class=\"info circle green icon\"></i><b>PAID</b>');
    }
    else{
    	$(this).closest('tr').find('#invoiceNo').append('<br><i class=\"info circle red icon\"></i><b>UNPAID</b>');
    }
	console.log(invoicee + '/' + count__or);
    console.log('-----------------------------');
    count__or = 0;
    invoicee  = 0;
});

