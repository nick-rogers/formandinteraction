$(document).ready(function(){


var topScroll = $(window).scrollTop();

console.log('topScroll: ' + topScroll);


/*var activeOne = true,
	activeTwo = false,
	activeThree = false;*/

/*$(window).scroll(function() {
   var hT = $('#bd01').offset().top,
       hH = $('#bd01').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > ((hT+hH)-125)){
       console.log('H1 on the view!');
   }
});*/


/*
$(window).scroll(function(){
	if(activeOne){
		scrollCheck('#bd01');
	}else if(activeTwo){
		scrollCheck('#bd02');
	}
});



function scrollCheck(idName){
	var hT = $(idName).offset().top,
       hH = $(idName).outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   	if (wS > ((hT+hH)-125)){
       var theId = $(idName).attr('id');
       console.log('theId: ' + theId);
       if(theId == '#bd01'){

       }
       else if(theId == '#bd02'){

       }

   }
}*/
var bd1Top = ($('#bd01').offset().top) + ($('#bd01').outerHeight()) - 125;
var bd2Top = ($('#bd02').offset().top) + ($('#bd02').outerHeight()) - 125;

var topDis = [bd1Top, bd2Top];


$(window).scroll(function(){
	if ($(window).scrollTop() > topDis[0]){
       var compare = $(window).scrollTop();
       $(window).scroll(function(){
       		var newTop = $(window).scrollTop();
       		console.log('old top: ' + compare + ' new top: ' + newTop);
       });
   	}
	/*var hT = $('#bd01').offset().top,
       hH = $('#bd01').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > ((hT+hH)-125)){
       console.log('H1 on the view!');
   }*/

});








});