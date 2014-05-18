$('#location').submit(function(e) {
	    e.preventDefault();

	    if($("#address").val().length>0){
	    	$.ajax({
				type: 'POST',
				url: '/findLocation',
				dataType: 'html',
				data: {"address": $("#address").val()},
				cache: false,
				timeout: 20000,

				success: function(data) {
					$("#test").html('');
					$("#test").html('<pre>'+data+'</pre>');
				},
				
				error: function(jqXHR, textStatus, errorThrown) {
					$('#test').append('error ' + textStatus + " " + errorThrown);
				}
			});	

	    }
	    else{
	    	alert("Enter address");
	    }
		

});