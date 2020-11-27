function shownoti(){
	notification({
		status:"success",
		message:"test",
		location:"bottom rigth",
		dalay:2000,
		animate:{
			in:"bounce",
			out:"fadeOutDown",
		}
	});
}

var notificationdelay=[];
function notification(config){
	var statustext="",message="",status="success",location,animatein="fadeInUp",animateout="fadeOut",dalay=1000,id="";
	if(config.location){
		location=config.location;
	} if(config.animate){
		if(config.animate.in){
			animatein=config.animate.in;
		}
		if(config.animate.in){
			animateout=config.animate.out;
		}
	}
	if(config.dalay){
		dalay=config.dalay;
	}
	if(config.status){
		status=config.status;
	}  if(config.message){
		message=config.message;
	}
	if(status=="success"){
		statustext="Success!";
	}else if(status=="warning"){
		statustext="Warning!";
	}else if(status=="danger"){
		statustext="Danger!";
	}
	var data_index=999;
	data_index=data_index+$('.notification').length;

	html="<div data-in="+animatein+" data-index="+data_index+" data-out="+animateout+" class=\"notification "+status+" "+location+" animated  "+animatein+"  \">\n" +
		"    <span class=\"close\">x</span>\n" +
		"   <strong>"+statustext+"</strong> "+message+"\n" +
		"</div>";
	$('body').append(html)

	notificationdelay['noti'+data_index]=setTimeout(function(){
		$('.notification[data-index='+data_index+'] .close').click();
	},dalay)
}
$(document).on('mouseover','.notification',function(){
	clearTimeout(notificationdelay['noti'+$(this).attr('data-index')]);
});

$(document).on('mouseleave','.notification',function(){
	$('.notification[data-index='+$(this).attr('data-index')+'] .close').click();
});

$(document).on('click','.notification .close',function(){
	var parent=$(this).parent();
	$(parent).removeClass($(parent).attr('data-in'));
	$(parent).addClass($(parent).attr('data-out'));
	setTimeout(function(){
		$(parent).remove()
	},1000);
})
