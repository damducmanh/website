//menu
$(document).ready(function(){
	$(window).scroll(function(){
		var menu = $('.menuid');
		if($(this).scrollTop()>150){
			menu.addClass('addmenu');
			$('.logo>a>img').css({'margin-top':'-20px'});
		}
		if($(this).scrollTop()<150){
			menu.removeClass('addmenu');
			$('.logo>a>img').css({'margin-top':'0px'});
		}
	})
	$('.btn-slide').on('click',function(){
		// var height=$(window).height();
		// console.log(height);
		// $('html,body').animate({'scrollTop':10000},3000);
		var endweb=$('.footer2').position().top;
		$('html,body').animate({'scrollTop':endweb},3000);
		console.log(endweb);
	});
	var rowbnt=$(".row-bnt").find('p');
	$(rowbnt).click(function(){
		$("html,body").animate({scrollTop:0},600);
	});
});