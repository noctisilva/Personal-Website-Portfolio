window.onload = function() {
	// $('#arrowPoint').click(function() {
	// 	$('html, body').animate({scrollTop:700}, 800);
	// 	return false;
	// });

	$('#arrowPoint').hover(function() {
		$(this).effect( "bounce", { times: 3, distance: 20 }, 800 );
		return false;
	});


	if($(window).width() <= 787){
		$('#arrowPoint').click(function() {
			$('html, body').animate({scrollTop:$("#info").offset().top});
			return false;
		});
	}
	else{
		$('#arrowPoint').click(function() {
			$('html, body').animate({scrollTop:900}, 800);
			return false;
		});		
	}

};