
$(document).ready(function() {

	$('form').each(function(event){
		//var _this = this;
		$(this).find('button').click(function(){
			if(!$(this).parent()[0].checkValidity())return true;
			console.log(1)
			$(this).parent().html('<h2>Sunteti in lista noastra!</h2>')
			
			$('.typeform-share')[0].click();
			
			return false;
		})
		//event.preventDefault();
	})
});

