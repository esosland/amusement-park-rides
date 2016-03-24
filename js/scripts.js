$(window).load(function(){
        $('#myModal').modal('show');
    });
$(function(event){
	$("button#submit").click(function(event){
		var feet = parseInt($("#feet").val());
		var inches = parseInt($("#inches").val());
		var height = (feet*12)+inches;
		if(height >= 48 && height <=63){
			$(".kiddyride").toggleClass("disabled");
			$(".mdride").toggleClass("disabled");
			$(".hardride").toggleClass("disabled");
			$(".kiddyrideT").toggleClass("text-muted");
			$(".mdrideT").toggleClass("text-muted");
			$(".hardrideT").toggleClass("text-muted");
			$("#confirm").fadeToggle();
		}
		if(height > 63){
			$(".mdride").toggleClass("disabled");
			$(".hardride").toggleClass("disabled");
			$(".mdrideT").toggleClass("text-muted");
			$(".hardrideT").toggleClass("text-muted");	
			$("#confirm").fadeToggle();
		}
		if(height < 48){
			$(".kiddyride").toggleClass("disabled");
			$(".kiddyrideT").toggleClass("text-muted");
			$("#confirm").fadeToggle();
		}
		$("#myModal").modal("toggle");

		event.preventDefault();
	})
	event.preventDefault();
});