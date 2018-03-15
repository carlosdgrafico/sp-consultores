$(document).ready(function(){

  	$('.banner__scroll, .header__link').click(function(){
  	  if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')||location.hostname==this.hostname){
  	    var
  	    target=$(this.hash);
  	    target=target.length?target:$('[name='+this.hash.slice(1)+']');
  	    if(target.length){
  	      $('html,body').animate({
  	          scrollTop:target.offset().top+20
  	      },1000);
  	      return false;
  	    }
  	  }
  	});


   $('.banner__scroll').hover(function(){
		$(this).addClass('animated bounce');
	});

   // $('.banner__scroll').mouseleave(function(){
	// 	$(this).removeClass('animated bounce');
	// });


   $(window).on('scroll', function(){
     var $window = $(this);
     var $altura = $('.banner').height();

     $window.scrollTop() > 200
       ? $('.banner__scroll').fadeOut(300)
       : $('.banner__scroll').fadeIn(300);

       $window.scrollTop() > $altura
         ? $('.header').css('background-color', '#fff')
         : $('.header').css('background-color', 'rgba(255,255,255,0)');

         console.log($altura);
   });

   var wow = new WOW(
     {
       boxClass:     'wow',      // animated element css class (default is wow)
       animateClass: 'animated', // animation css class (default is animated)
       offset:       0,          // distance to the element when triggering the animation (default is 0)
       mobile:       true,       // trigger animations on mobile devices (default is true)
       live:         true,       // act on asynchronously loaded content (default is true)
       callback:     function(box) {
         // the callback is fired every time an animation is started
         // the argument that is passed in is the DOM node being animated
       },
       scrollContainer: null,    // optional scroll container selector, otherwise use window,
       resetAnimation: true,     // reset animation on end (default is true)
     }
   );
   wow.init();


	$('.header__link').click(function(){
		$(".header__link").removeClass('header__link--active');
		$(".burger").removeClass('on');
		$(".header__menu").removeClass('onActive');
		$(this).addClass('header__link--active');

	});


   $(".burger").click(function() {
	  $(this).toggleClass("on");
   });


   // despliega el menu lateral
	$('.burger').on('click', function() {
      $(".header__menu").toggleClass('onActive');
	});


   $('.owl-frases, .owl-testimonios').owlCarousel({
      //animateOut: 'slideOutDown',
      animateIn: 'flipInX',
		loop: true,
		autoplay: true,
		margin: 10,
		nav: true,
		dots: true,
		navText: ["<div class='prev'></div>", "<div class='next'></div>"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

});
