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


    let or1 = $(this).closest('tr').find('#or_1').val();
    let or2 = $(this).closest('tr').find('#or_2').val();
    let or3 = $(this).closest('tr').find('#or_3').val();
    let or4 = $(this).closest('tr').find('#or_4').val();
    let or5 = $(this).closest('tr').find('#or_5').val();


    //creates and array to store all data in single array vars
    let invAll = [inv1,inv2,inv3,inv4,inv5];
    let orAll =  [or1,or2,or3,or4,or5];

    //loop for invoice array
    for (var i = 0;i < 5; i++) {
    	if(invAll[i] == 0){
    		
    	}
    	else {
            invoicee++;
            
    	}
    }

    //loop for or array
    for (var i = 0;i < 5; i++) {
    	if(orAll[i] == 'None'){
    		
    	}
    	else {
            count__or = count__or + 1;
            
    	}
    }
    //console.log(invoicee);
    //console.log(count__or);
    //check if invoice and count is both not null
    if (invoicee == count__or) {
    	$(this).closest('tr').find('#invoiceNo').append('<hr><i class=\"info circle green icon\"></i><b>PAID</b>');
    
    }
    else{
    	$(this).closest('tr').find('#invoiceNo').append('<br><i class=\"info circle blue icon\"></i><b>Current</b>');
    }
    

    count__or = 0;
    invoicee  = 0;
    
});

