
	$(document).ready(function() {
		var proj4_data;  
		proj4_data = new Array();
		var cart = new Object();
		var req = new HttpRequest('/perl/jadrn052/get_products.cgi', storeData);
		req.send();        
    
    
    $( "#dialog-modal" ).dialog({
            height: 650,
            width: 780,
            modal: true,
            autoOpen: false
    });
	
	$( "#dialog-modal-cart" ).dialog({
            height: 700,
            width: 780,
            modal: true,
            autoOpen: false
    });
	
    
	$( "#menus" ).tabs();

	$( "#products_all" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#products_all li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
	

    $('#order_button').bind('click', function($e) {       
            $("#dialog-modal").dialog('open');
            });  
			
	$('.cart').bind('click', function($e) {   
			alert("cart");
            $("#dialog-modal-cart").dialog('open');
            }); 		
	
	$(".cart").button({
            icons: {
                primary: "ui-icon-cart"
            },
            text: false
        })
		
	var count=0;
	var itemlist='|';var temp=0;
	
	$('#milk').bind('click', function() {
        tmpString = "<h2>Milk Chocolate</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
                tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" height=\"300px\"/>";             
                tmpString += "<h3>"+proj4_data[i][2]+"</h3>";
				tmpString += proj4_data[i][3]+"<br />";
				tmpString += "<p>"+proj4_data[i][4]+"</p>";
				tmpString += "&#36;"+proj4_data[i][5]+"&nbsp;&nbsp;&nbsp;";
				tmpString +="<button class=\"add"+proj4_data[i][0]+"\">Add to cart</button>";
				tmpString += "<div class=\"clear\"></div><br /><hr />";                
                }
            }
        var handle = document.getElementById('milkdiv');
        handle.innerHTML = tmpString;
		gethandlers();
        })                           
    
    $('#dark').bind('click', function() {
        tmpString = "<h2>Dark Chocolate</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
                tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" height=\"300px\"/>"; 
                tmpString += "<h3>"+proj4_data[i][2]+"</h3>";
				tmpString += proj4_data[i][3]+"<br />";
				tmpString += "<p>"+proj4_data[i][4]+"</p>";
				tmpString += "&#36;"+proj4_data[i][5]+"&nbsp;&nbsp;&nbsp;";
				tmpString +="<button class=\"add"+proj4_data[i][0]+"\">Add to cart</button>";	
				tmpString += "<div class=\"clear\"></div><br /><hr />";                 
                }
            }
        var handle = document.getElementById('darkdiv');
        handle.innerHTML = tmpString;
		gethandlers();
        })
        
    $('#nuts').bind('click', function() {
        tmpString = "<h2>Nuts and chews</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {
                tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" height=\"300px\"/>";                
                tmpString += "<h3>"+proj4_data[i][2]+"</h3>";
				tmpString += proj4_data[i][3]+"<br />";
				tmpString += "<p>"+proj4_data[i][4]+"</p>";
				tmpString += "&#36;"+proj4_data[i][5]+"&nbsp;&nbsp;&nbsp;";
				tmpString +="<button class=\"add"+proj4_data[i][0]+"\">Add to cart</button>";	
            tmpString += "<div class=\"clear\"></div><br /><hr />";                
                }
            }
        var handle = document.getElementById('nutsdiv');
        handle.innerHTML = tmpString;
		gethandlers();
        }) 
        
    $('#brittle').bind('click', function() {
        tmpString = "<h2>Brittles and Toffies</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
                tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" height=\"300px\"/>"; 
                tmpString += "<h3>"+proj4_data[i][2]+"</h3>";
				tmpString += proj4_data[i][3]+"<br />";
				tmpString += "<p>"+proj4_data[i][4]+"</p>";
				tmpString += "&#36;"+proj4_data[i][5]+"&nbsp;&nbsp;&nbsp;";
				tmpString +="<button class=\"add"+proj4_data[i][0]+"\">Add to cart</button>";	
            tmpString += "<div class=\"clear\"></div><br /><hr />";                
                }
            }
        var handle = document.getElementById('brittlesdiv');
        handle.innerHTML = tmpString;
		gethandlers();
        })   
			
	$('#truffles').bind('click', function() {
        tmpString = "<h2>Truffles</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
                tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" height=\"300px\"/>"; 
                tmpString += "<h3>"+proj4_data[i][2]+"</h3>";
				tmpString += proj4_data[i][3]+"<br />";
				tmpString += "<p>"+proj4_data[i][4]+"</p>";
				tmpString += "&#36;"+proj4_data[i][5]+"&nbsp;&nbsp;&nbsp;";
				tmpString +="<button class=\"add"+proj4_data[i][0]+"\">Add to cart</button>";	
            tmpString += "<div class=\"clear\"></div><br /><hr />";                
                }
            }
        var handle = document.getElementById('trufflesdiv');
        handle.innerHTML = tmpString;
		gethandlers();
        })                

	$('#gifts').bind('click', function() {
        tmpString = "<h2>Gifts</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
                tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" height=\"300px\"/>"; 
                tmpString += "<h3>"+proj4_data[i][2]+"</h3>";
				tmpString += proj4_data[i][3]+"<br />";
				tmpString += "<p>"+proj4_data[i][4]+"</p>";
				tmpString += "&#36;"+proj4_data[i][5]+"&nbsp;&nbsp;&nbsp;";
				tmpString +="<button class=\"add"+proj4_data[i][0]+"\">Add to cart</button>";
            tmpString += "<div class=\"clear\"></div><br /><hr />";                
                }
            }
		$('#content').css('visibility', 'hidden').css('position', 'fixed');
        var handle = document.getElementById('giftsdiv');
        handle.innerHTML = tmpString;
		gethandlers();
        })                
		
	$('#holiday').bind('click', function() {
        tmpString = "<h2>Holiday Assortments</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
                tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" height=\"300px\"/>"; 
                tmpString += "<h3>"+proj4_data[i][2]+"</h3>";
				tmpString += proj4_data[i][3]+"<br />";
				tmpString += "<p>"+proj4_data[i][4]+"</p>";
				tmpString += "&#36;"+proj4_data[i][5]+"&nbsp;&nbsp;&nbsp;";
				tmpString +="<button class=\"add"+proj4_data[i][0]+"\">Add to cart</button>";	
            tmpString += "<div class=\"clear\"></div><br /><hr />";                
                }
            }
        var handle = document.getElementById('holidaydiv');
        handle.innerHTML = tmpString;
		gethandlers();
        }) 
	
	$(':submit').on('click', function(e) {
        $('input').removeClass("displayerror");
        $('#message_line').text("");
		if(!validate_fields_on_submit()) {
            e.preventDefault();
            return;
            }
		var myparams="&0=0&";	
        for (var p = 0; p < proj4_data.length; p++ ) {
			var sku=proj4_data[p][0];
			if (typeof cart[sku] !== "undefined") {
			myparams=myparams+sku+"="+cart[sku]+"&";
			}
		}
        var params = $('form').serialize();      
        var url = "/perl/jadrn052/db_insert.cgi?" + params+ myparams;
        var request = new HttpRequest(url, submitHandler);
        request.send();
		return false;
        });
	
	function submitHandler(response) { 
		window.location='thankyou.html';
        }  
	
function updateCart() {
   
   var count = 0;
   for(var sku in cart) {
      count += cart[sku];
   }
   $('#cart_contains').html('My Cart (' + count + ')');
   if (count > 0) {
		$('#content').css('visibility', 'hidden').css('position', 'fixed');
		$('#cart table[id=cart_items] tr').remove();
		var cartTable = $('#cart table[id=cart_items]');
		var subtotal = 0;
		var carthead='<tr><th colspan="3">Product</th><th>Quantity</th><th>Cost</th><th>Total</th></tr>';
		cartTable.append(carthead);
		for (var p = 0; p < proj4_data.length; p++ ) {
			var cartrow = '';
			var sku = proj4_data[p][0];
			if (typeof cart[sku] !== "undefined") {
				subtotal += cart[sku] * proj4_data[p][5];
				cartrow += '<tr><td colspan="3">' + proj4_data[p][2] + '</td>';
				cartrow += '<td colspan="1">' + cart[sku] + '</td>';
				cartrow += '<td colspan="1">$' + proj4_data[p][5] + '</td>';
				cartrow += '<td id="subtotal'+sku+'">$' + proj4_data[p][5]*cart[sku] + '</td>';
				cartrow += '</tr>';
				cartTable.append(cartrow);
			 }
		}
      var tax = subtotal * 0.0775;
      var shipping = count * 1.00;
      var total = subtotal + tax + shipping;
	  cartTable.append('<tr><td colspan="6"><hr /></td></tr>');
      cartTable.append('<tr><td></td><th colspan="4" id="total">Subtotal</th><td class="totalField">$' + subtotal.toFixed(2) + '</td></tr>');
      cartTable.append('<tr><td></td><th colspan="4" id="tax">Tax (7.75%)</th><td>$' + tax.toFixed(2) + '</td></tr>');
      cartTable.append('<tr><td></td><th colspan="4" id="shipping">Shipping ($1/item)</th><td>$' + shipping.toFixed(2) + '</td></tr>');
      cartTable.append('<tr><td></td><th colspan="4" id="final">Total</th><td class="totalField">$' + total.toFixed(2) + '</td></tr>');
	  $('#order_button').css('visibility', 'visible');
   }
   else {
		var cartTable = $('#cart table[id=cart_items]');
		var cartrow = '<tr><td>Your cart is empty !</td></tr>';
		$('#cart table[id=cart_items] tr').remove();
		$('#order_button').css('visibility', 'hidden');
		cartTable.append(cartrow);
		$('#cart').css('font-weight', 'normal');
   }  
}	
	
function gethandlers() {
   for (var p = 0; p < proj4_data.length; p++ ) {
      var sku = proj4_data[p][0];
      $('.add' + sku).on('click', function(e) {
         var sku = $(this).attr('class').substring(3);  
         if (typeof cart[sku] === "undefined") {
            cart[sku] = 0;
         }
         cart[sku] += 1;
         updateCart();
      }); 
   }
   updateCart();
}
  
function validate_fields_on_submit() {   
        var bad=false;
		$('#boxes').removeClass("displayerror");
        if(is_blank($('[name="fname"]').val())) {
            bad=true; 
            $('[name="fname"]').focus();
            $('[name="fname"]').addClass("displayerror");     
            $('#message_line').text("Please enter the first name");            
            }
        else if(is_blank($('[name="lname"]').val())) {
            bad=true; 
            $('[name="lname"]').focus();
            $('[name="lname"]').addClass("displayerror");     
            $('#message_line').text("Please enter the last name");            
            }
		else if(is_blank($('[name="address1"]').val())) {
            bad=true; 
            $('[name="address1"]').focus();
            $('[name="address1"]').addClass("displayerror");     
            $('#message_line').text("Please enter the address");            
            } 	
		else if(is_blank($('[name="city"]').val())) {
            bad=true; 
            $('[name="city"]').focus();
            $('[name="city"]').addClass("displayerror");     
            $('#message_line').text("Please enter the city");            
            } 
		else if(is_blank($('[name="state"]').val())) {
            bad=true; 
            $('[name="state"]').focus();
            $('[name="state"]').addClass("displayerror");     
            $('#message_line').text("Please enter the state");            
            } 
		else if(is_blank($('[name="zip"]').val())) {
            bad=true; 
            $('[name="zip"]').focus();
            $('[name="zip"]').addClass("displayerror");     
            $('#message_line').text("Please enter the zip");            
            } 		
        else if(not_valid_phone($('[name="area_phone"]').val(),3)) {
            bad=true; 
            $('[name="area_phone"]').addClass("displayerror");     
            $('#message_line').text("The area code appears to be invalid");            
            $('[name="area_phone"]').focus();
            }   
        else if(not_valid_phone($('[name="prefix_phone"]').val(),3)) {
            bad=true; 
            $('[name="prefix_phone"]').addClass("displayerror");     
            $('#message_line').text("The prefix appears to be invalid");            
            $('[name="prefix_phone"]').focus();
            }
        else if(not_valid_phone($('[name="phone"]').val(),4)) {
            bad=true; 
            $('[name="phone"]').addClass("displayerror");     
            $('#message_line').text("The phone number appears to be invalid");            
            $('[name="phone"]').focus();
            } 						
        else if(is_blank($('[name="sfname"]').val())) {
            bad=true; 
            $('[name="sfname"]').focus();
            $('[name="sfname"]').addClass("displayerror");     
            $('#message_line').text("Please enter the first name in shipping details");            
            } 
        else if(is_blank($('[name="slname"]').val())) {
            bad=true; 
            $('[name="slname"]').focus();
            $('[name="slname"]').addClass("displayerror");     
            $('#message_line').text("Please enter the last name in shipping details");            
            }              
		else if(is_blank($('[name="saddress1"]').val())) {
            bad=true; 
            $('[name="saddress1"]').focus();
            $('[name="saddress1"]').addClass("displayerror");     
            $('#message_line').text("Please enter the address in shipping details");            
            } 	
		else if(is_blank($('[name="scity"]').val())) {
            bad=true; 
            $('[name="scity"]').focus();
            $('[name="scity"]').addClass("displayerror");     
            $('#message_line').text("Please enter the city in shipping details");            
            } 
		else if(is_blank($('[name="sstate"]').val())) {
            bad=true; 
            $('[name="sstate"]').focus();
            $('[name="sstate"]').addClass("displayerror");     
            $('#message_line').text("Please enter the state in shipping details");            
            } 
		else if(is_blank($('[name="szip"]').val())) {
            bad=true; 
            $('[name="szip"]').focus();
            $('[name="szip"]').addClass("displayerror");     
            $('#message_line').text("Please enter the zip in shipping details");            
            } 		
        else if(not_valid_phone($('[name="sarea_phone"]').val(),3)) {
            bad=true; 
            $('[name="sarea_phone"]').addClass("displayerror");     
            $('#message_line').text("The area code appears to be invalid in shipping details");            
            $('[name="sarea_phone"]').focus();
            }   
        else if(not_valid_phone($('[name="sprefix_phone"]').val(),3)) {
            bad=true; 
            $('[name="sprefix_phone"]').addClass("displayerror");     
            $('#message_line').text("The prefix appears to be invalid in shipping details");            
            $('[name="sprefix_phone"]').focus();
            }
        else if(not_valid_phone($('[name="sphone"]').val(),4)) {
            bad=true; 
            $('[name="sphone"]').addClass("displayerror");     
            $('#message_line').text("The phone number appears to be invalid in shipping details");            
            $('[name="sphone"]').focus();
            } 	
		else if(is_blank($('input:radio[name=pay]:checked').val())){
			bad=true;
			$('[name="pay"]').focus();
			$('[name="pay"]').addClass("displayerror");
			$('#message_line').text("Please select the method of payment"); 
		}	
		else if(is_blank($('[name="card"]').val())) {
            bad=true; 
            $('[name="card"]').focus();
            $('[name="card"]').addClass("displayerror");     
            $('#message_line').text("Please enter a valid card number");            
            }
		else if(not_valid_card($('[name="card"]').val())) {
            bad=true; 
            $('[name="card"]').focus();
            $('[name="card"]').addClass("displayerror");     
            $('#message_line').text("Please enter a valid card number");            
            }	
		else if(is_blank($('[name="exp_date"]').val())) {
            bad=true; 
            $('[name="exp_date"]').focus();
            $('[name="exp_date"]').addClass("displayerror");     
            $('#message_line').text("Please enter the expiry date of the card");            
            } 
        if(bad)                                         
            return false;
        return true; // the form is valid  
        }

var valid = true;
    $('[name="fname"]').focus(); // put focus on first field in form
        
    $('[name="zip"]').on('blur', function(e) {
        var input = $.trim($('[name="zip"]').val());
        var zipTester = /^\d{5}(-\d{4})?$/;
        if(!zipTester.test(input)) {
            $('#message_line').text("Your zip code appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid white";
            $('#message_line').text("");            
            }
        }); 
		
	$('[name="szip"]').on('blur', function(e) {
        var input = $.trim($('[name="szip"]').val());
        var zipTester = /^\d{5}(-\d{4})?$/;
        if(!zipTester.test(input)) {
            $('#message_line').text("Your zip code appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid white";
            $('#message_line').text("");            
            }
        }); 	
	
	$('[name="fname"]').on('blur', function(e) {
        if(!is_blank($('[name="fname"]').val())) {
            this.style.border = "1px solid white";
            $('#message_line').text(""); 
            }
        });	
	
	$('[name="lname"]').on('blur', function(e) {
        if(!is_blank($('[name="lname"]').val())) {
            this.style.border = "1px solid white";
            $('#message_line').text(""); 
            }
        });

	$('[name="sfname"]').on('blur', function(e) {
        if(!is_blank($('[name="sfname"]').val())) {
            this.style.border = "1px solid white";
            $('#message_line').text(""); 
            }
        });			
    
	$('[name="slname"]').on('blur', function(e) {
        if(!is_blank($('[name="slname"]').val())) {
            this.style.border = "1px solid white";
            $('#message_line').text(""); 
            }
        });	
		
	$('[name="address1"]').on('blur', function(e) {
        if(!is_blank($('[name="address1"]').val())) {
            this.style.border = "1px solid white";
            $('#message_line').text(""); 
            }
        });	

	$('[name="saddress1"]').on('blur', function(e) {
        if(!is_blank($('[name="saddress1"]').val())) {
            this.style.border = "1px solid white";
            $('#message_line').text(""); 
            }
        });			
    
    $('[name="area_phone"]').on('keyup', function() {
        if($('[name="area_phone"]').val().length == 3)       
            $('[name="prefix_phone"]').focus();
        });
            
    $('[name="prefix_phone"]').on('keyup', function() {
        if($('[name="prefix_phone"]').val().length == 3)       
            $('[name="phone"]').focus();
        }); 
        
    $('[name="area_phone"]').on('blur', function() {
        var tmp = $.trim($('[name="area_phone"]').val());
        if(tmp == "") return;
        if(tmp.length != 3 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your area code appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid white";
            $('#message_line').text("");
            }        
        });
        
    $('[name="prefix_phone"]').on('blur', function() {
        var tmp = $.trim($('[name="prefix_phone"]').val());
        if(tmp == "") return;        
        if(tmp.length != 3 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your phone number prefix appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid white";
            $('#message_line').text("");
            }        
        });    
        
    $('[name="phone"]').on('blur', function() {
        var tmp = $.trim($('[name="phone"]').val());
        if(tmp == "") return;        
        if(tmp.length != 4 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your phone number prefix appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid white";
            $('#message_line').text("");
            }        
        });             
	
	$('[name="sarea_phone"]').on('keyup', function() {
        if($('[name="sarea_phone"]').val().length == 3)       
            $('[name="sprefix_phone"]').focus();
        });
            
    $('[name="sprefix_phone"]').on('keyup', function() {
        if($('[name="sprefix_phone"]').val().length == 3)       
            $('[name="sphone"]').focus();
        }); 
        
    $('[name="sarea_phone"]').on('blur', function() {
        var tmp = $.trim($('[name="sarea_phone"]').val());
        if(tmp == "") return;
        if(tmp.length != 3 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your area code appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid white";
            $('#message_line').text("");
            }        
        });
        
    $('[name="sprefix_phone"]').on('blur', function() {
        var tmp = $.trim($('[name="sprefix_phone"]').val());
        if(tmp == "") return;        
        if(tmp.length != 3 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your phone number prefix appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid white";
            $('#message_line').text("");
            }        
        });    
        
    $('[name="sphone"]').on('blur', function() {
        var tmp = $.trim($('[name="sphone"]').val());
        if(tmp == "") return;        
        if(tmp.length != 4 || !$.isNumeric(tmp))  {     
            $('#message_line').text("Your phone number prefix appears to be invalid");
            this.style.border = "1px solid red";
            }
        else {
            this.style.border = "1px solid white";
            $('#message_line').text("");
            }        
        });	
	
	$('[name="state"]').on('blur',function(){
		var tmp=$.trim($('[name="state"]').val());
		if(tmp == "")	return;
		var stateTester =/^[A-Z][A-Z]$/;
		if(!stateTester.test(tmp)){
			$('#message_line').text("Your state appears to be invalid");
			this.style.border = "2px solid red";	
		}
		else{
			this.style.border="1px solid white";
			$('#message_line').text("");
			}
		});
		
	$('[name="sstate"]').on('blur',function(){
		var tmp=$.trim($('[name="sstate"]').val());
		if(tmp == "")	return;
		var stateTester =/^[A-Z][A-Z]$/;
		if(!stateTester.test(tmp)){
			$('#message_line').text("Your state appears to be invalid");
			this.style.border = "2px solid red";	
		}
		else{
			this.style.border="1px solid white";
			$('#message_line').text("");
			}
		});	

	$('[name="card"]').on('blur',function(){
		var tmp=$.trim($('[name="card"]').val());
		if(tmp=="")	return;
		if(not_valid_card(tmp)){
			$('#message_line').text("card number format appears to be invalid");
			this.style.border = "2px solid red";	
		}
		else{
			this.style.border="1px solid white";
			$('#message_line').text("");
			}
		});	
		
	function not_valid_card(card){
		var datetester=/^\d{16}$/;
		if (!datetester.test(card)){
			return true;
		}
		return false;
	}
	
	$('[name="exp_date"]').on('blur',function(){
		var tmp=$.trim($('[name="exp_date"]').val());
		if(tmp=="")	return;
		if(not_valid_date_format(tmp)){
			$('#message_line').text("Expiry Date format appears to be invalid");
			this.style.border = "2px solid red";	
		}
		else if(not_valid_date(tmp)){
			$('#message_line').text("Expiry date appears to be invalid");
			this.style.border = "2px solid red";
		}
		else{
			this.style.border="1px solid white";
			$('#message_line').text("");
			}
		});	

	function not_valid_date_format(date){
		var datetester=/^\d{2}\-\d{4}$/;
		if (!datetester.test(date)){
			return true;
		}
		return false;
	}
	
	function not_valid_date(date){
		var day=1;
		var month=date.split("-")[0];
		var year=date.split("-")[1];
		var birthdate = new Date(year, month, day);
		if ((birthdate.getMonth()!=month)){
			return true;
		}
		else
			return false;
	}
       
    $(':reset').on('click', function(e) {  
        $('input').text("");
        $('*').removeClass("displayerror");
        $('#message_line').text("");
        $('[name="fname"]').focus();        
        });      
	  
    function is_blank(str) {
        var input = $.trim(str);    
        if(input.length == 0)
            return true;
        return false;
        }
             
             
    function not_valid_phone(number, size) {                        
        var tmp = $.trim(number);
        if(tmp.length != size || !$.isNumeric(tmp))
            return true;
        return false;
        }
        
   
	$(':checkbox').on('blur',function(){ 
		if(this.checked)
		$('[name="sfname"]').val($('[name="fname"]').val());
		$('[name="slname"]').val($('[name="lname"]').val());
		$('[name="saddress1"]').val($('[name="address1"]').val());
		$('[name="saddress2"]').val($('[name="address2"]').val());
		$('[name="scity"]').val($('[name="city"]').val());
		$('[name="sstate"]').val($('[name="state"]').val());
		$('[name="szip"]').val($('[name="zip"]').val());
		$('[name="sarea_phone"]').val($('[name="area_phone"]').val());
		$('[name="sprefix_phone"]').val($('[name="prefix_phone"]').val());
		$('[name="sphone"]').val($('[name="phone"]').val());
		});
      		
		
function storeData(response) {
	var tmpArray = explodeArray(response,';');
	for(var i=0; i < tmpArray.length; i++) {
		innerArray = explodeArray(tmpArray[i],'|');
		proj4_data[i] = innerArray;
		}
	gethandlers();	
	}
    
    
// from http://www.webmasterworld.com/forum91/3262.htm            
	function explodeArray(item,delimiter) {
		tempArray=new Array(1);
		var Count=0;
		var tempString=new String(item);

		while (tempString.indexOf(delimiter)>0) {
		tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
		tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
		Count=Count+1
		}
		tempArray[Count]=tempString;
		return tempArray;
	}     
}
);