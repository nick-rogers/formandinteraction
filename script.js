$(document).ready(function(){


var bd1Top = ($('#bd01').offset().top) + ($('#bd01').outerHeight()) - 125;
var bd2Top = ($('#bd02').offset().top) + ($('#bd02').outerHeight()) - 125;

var topDis = [bd1Top, bd2Top];

var topScroll = $(window).scrollTop();

if(topScroll < topDis [0]){
		$('.change-week').text('1 (Aug 27 - 31)');
	}
	else if(topScroll < topDis[1]){
		$('.change-week').text('2 (Sep 3 - 7)');
	}
	else if(topScroll > topDis[1]){
		$('.change-week').text('3 (Sep 10 - 14)');
	}

console.log('topScroll: ' + topScroll);

$(window).scroll(function(){
	var wS = $(this).scrollTop();

	if(wS < topDis [0]){
		$('.change-week').text('1 (Aug 27 - 31)');
	}
	else if(wS < topDis[1]){
		$('.change-week').text('2 (Sep 3 - 7)');
	}
	else if(wS > topDis[1]){
		$('.change-week').text('3 (Sep 10 - 14)');
	}
});



});