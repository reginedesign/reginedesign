(function(){
	emailjs.init("user_cQLFD7zU7dBix5qiT6hoz");

	var myform = $("form#contactForm");
	myform.submit(function(event){
		event.preventDefault();


    // Change to your service ID, or keep using the default service
    var service_id = "gmail";
    var template_id = "template_WSo9Hfs2";

    myform.find("button").text("Sending...");
    
    
    emailjs.sendForm(service_id,template_id,"contactForm")
    .then(function(){
    	new Noty({
    		theme: 'nest',
    		type: 'success',
    		killer: true,
    		timeout: 1000,
    		layout: 'topRight',
    		text: 'Your message have been sent! :)'
    	}).show();
    	myform.find("button").text("Send Message");
    	myform.find("input[type=text],input[type=email], textarea").val("");
        document.getElementById("submitFormBtn").disabled = true;
        grecaptcha.reset()
    }, function(err) {
    	new Noty({
    		theme: 'nest',
    		killer: true,
    		timeout: 1000,
    		type: 'error',
    		layout: 'topRight',
    		text: 'Oh no! Something went wrong! :('
    	}).show();
    	console.log(err)
    	myform.find("button").text("Send Message");
    });
    return false;
})
})();
