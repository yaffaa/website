

$(document).ready(function(){
	$('.submit').click(function (event){
		
		console.log("THE BUTTON HAS BEEN LE CLICKED")
		
		var email = $(".mail").val()
		var subject = $(".subject").val()
		var message = $(".message").val()
		var statusel = $(".status")
		if(email.length >= 5 && email.includes('@') && email.includes('.')){
			statusel.append('<div>Email Is valid</div')
		}else{
			statusel.append('<div>Email Is not valid</div')
		}
		
		if(subject.length >= 2){
			statusel.append('<div>Subjet Is valid</div')
		}else{
			statusel.append('<div>Subject Is not valid</div')
		}
		
		if(message.length >= 5){
			statusel.append('<div>Message Is not valid</div')
		}else{
			statusel.append('<div>Message Is not valid</div')
		}
	})
	
})