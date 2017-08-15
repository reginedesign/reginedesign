(function(){
  emailjs.init("user_cQLFD7zU7dBix5qiT6hoz");

  var myform = $("form#contactForm");
  myform.submit(function(event){
  	event.preventDefault();

    // Change to your service ID, or keep using the default service
    var service_id = "regine";
    var template_id = "template_WSo9Hfs2";

    myform.find("button").text("Sending...");
    
    
	  emailjs.sendForm(service_id,template_id,"contactForm")
		  .then(function(){
			alert("Sent!");
			 myform.find("button").text("Send");
			 window.location.reload();
		  }, function(err) {
			 alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
			 myform.find("button").text("Send");
		  });
		return false;
  })
})();
