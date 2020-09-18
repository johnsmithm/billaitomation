
$(document).ready(function() {

	$('form').each(function(event){
		//var _this = this;
		$(this).find('button').click(function(){
			if(!$(this).parent()[0].checkValidity())return true;
			console.log(1)
			$(this).parent().html('<h2>Sunteti in lista noastra!</h2>')
			$('body').append('<div class="typeform-widget" data-url="https://form.typeform.com/to/Nb1FJIJf" style="width: 100%; height: 500px;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=Nb1FJIJf&utm_source=typeform.com-01EH9DV8C5WW9HCHNM372WFBZY-free&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>');
			return false;
		})
		//event.preventDefault();
	})
});
