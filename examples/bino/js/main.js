$(function(){
    $('#owl-header').owlCarousel({
    	loop: true,
		items:	1,
		nav: true,
		smartSpeed: 2000,
		autoplay: true,
		autoplayTimeout: 8000,
		navText: [
			'<p class="slider-nav-btn prew-btn"></p>',
			'<p class="slider-nav-btn next-btn"></p>'
		]
	});
	$('#owl-cards').owlCarousel({
    	loop: true,
		dots: true,
		items:	1,
		smartSpeed: 1000,
		autoplay: true
	});
	$('body').on('click', '.go_to', function(){
		var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
	    return false;
    });
    $('body').on('click', '.filter_js', function(){
    	$('.filter_js').removeClass('recent-works__filter_active');
    	$(this).addClass('recent-works__filter_active');
    });
    $(document).scroll(function() {
    	var header = $('.header').outerHeight();
    	var scroll_top = $(this).scrollTop();
    	if (scroll_top > header){
    		$('.go-up-button').addClass('go-up-button__active');
    	}else{
    		$('.go-up-button').removeClass('go-up-button__active');
    	}
    });
    $('.our-team__face-block').hover(
	  function() {
	    $(this).closest('.our-team__member').find('.our-team__descr-block').addClass('our-team__descr-block_active');
	  }, function() {
	    $(this).closest('.our-team__member').find('.our-team__descr-block').removeClass('our-team__descr-block_active');
	  }
	);

});
