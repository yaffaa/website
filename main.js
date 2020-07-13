

$(document).ready(function(){
	$('.submit').click(function (event){
		
		console.log("THE BUTTON HAS BEEN LE CLICKED")
		
		var email = $(".mail").val()
		var subject = $(".subject").val()
		var message = $(".message").val()
		var statusel = $(".status")
		if(email.length >= 5 && email.includes('@') && email.includes('.')){
			statusel.text('Email Is valid\n')
		}else{
			statusel.text('Email Is not valid\n')
			event.preventDefault();
		}
		
		if(subject.length >= 2){
			statusel.append('<br>Subjet Is valid')
		}else{
			statusel.append('<br>Subject Is not valid')
			event.preventDefault();
		}
		
		if(message.length >= 5){
			statusel.append('<div>Message Is valid</div')
		}else{
			statusel.append('<div>Message Is not valid</div')
event.preventDefault();
		}
	})
	
})
