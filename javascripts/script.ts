/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/bootstrap/bootstrap.d.ts" />

$(function() {
	$(window).scroll(function() {
		if( $('.navbar').offset().top > 50){
			$('.navbar-fixed-top').addClass('top-nav-collapse');
		}else{
			$('.navbar-fixed-top').removeClass('top-nav-collapse');
		}
	});
	
	$('.page-scroll > a').click(function(){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top-100
		}, 1500, 'easeInOutExpo');		
		event.preventDefault();
	});
	
	$(document).ready(function(){
    $("body").scrollspy({
        target: ".navbar-custom",
        offset: 370
    }) 
	});
});