function showMenu(obj){
	var status=$(obj).attr('data-is-open');
	
	if(status=='0'){
		$('.menu')
		.css({
			'width': '40%'
		});
		$(obj).attr("data-is-open",'1');
		
		$('.container-fluid').css({
			'left':'40%'
		});
	}else{
		$('.menu')
		.css({
			'width': '0'
		});
		$(obj).attr("data-is-open",'0');
		
		$('.container-fluid').css({
			'left':'0'
		});
	}
}

function enterMe(){
	var count=0;
	var base=8;
	
	var time=setInterval(function(){
		$('#face').css({
			'box-shadow': '0 0 '+count*base+'px #ccc'
		});
		if(++count>=5){
			clearInterval(time);
			
			$('#face').css({
				'box-shadow': '0 0 8px #ccc'
			});
		}
	},500);
}


$(function() {
	$('.menu li a').on('click',function(){
		$('#menuBtn').click();
		$('#headerTitle').text($(this).text());
		if($(this).text().indexOf('Me')>=0){
			enterMe();
		}
	});

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: 3000,

        // If we need pagination
        pagination: '.swiper-pagination'
    });

    //$('#menuBtn').click();
	//$('.menu li').eq(3).find('a').click();
});