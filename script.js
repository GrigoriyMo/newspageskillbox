$(function(){
	var menuPressed = false;
	$.get('http://data.fixer.io/api/latest',
		{'access_key':'7556a4a9e24d262b95e2bdc7193a5b65',
		 'base':'EUR',
		 'symbols':'RUB,USD,EUR'
		},function(res){
			console.log(res);
			$('.currency-euro').text(res.rates.RUB.toFixed(2));
			$('.currency-dollar').text((res.rates.RUB/res.rates.USD).toFixed(2));
		});

	$('.all-news').click(function(){
		console.log('all-news clicked');
		if($('body').css('overflow')==='hidden'){
			$('body').css('overflow','');
		}else{
			$('body').css('overflow','hidden');
		}
	});
	$('.mobile-menu-burger').click(function(){
		if(menuPressed){
			$(this).css({"background-image":"url('img/burger.png')"});
			$('.menu-container ul').css('display','none');
			menuPressed = false;
		}else{
			$(this).css({"background-image":"url('img/cross.png')"});
			$('.menu-container ul').css('display','block');
			menuPressed = true;
		}
	});
});