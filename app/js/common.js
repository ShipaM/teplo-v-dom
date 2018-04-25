$(function() {

	// Custom JS

	//Табы
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//ММеню
	$('#my-menu').mmenu({
		extensions: ['effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-menu.png" alt="Утепление домов Тепло В Дом">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	//Анимация
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
		}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	//появление блока при нажатии на кнопку
	$("#scroll_down").click(function() {
		$("html, body").animate({
			scrollTop : $(".article").offset().top
		}, 600);
	
	});

	//Инициализация карусели проверяем инициализирована карусель или нет до самой карусели
	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function() {
			carouselService()
		}, 100);
	});

	//Карусель
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-chevron-circle-left"></i>', '<i class="fa fa-chevron-circle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			500: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	$('.partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-chevron-circle-left"></i>', '<i class="fa fa-chevron-circle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	$('.rewiews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		naw: false,
		autoHeight: true
	});

//Контент одинаковой высоты с картинками
	function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths  = $(this),
					thsh = ths.find('.carousel-services-content').outerHeight();
					ths.find('.carousel-services-images').css('min-height', thsh);
		});
	}carouselService();

//Выделяем первое слово
	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});
//Выделяем последнее слово
	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});


//Подключаем equalHeights для того чтобы блоки были одинаковой высоты по высоте большего
	$('.carousel-services-content').equalHeights();

//Появление кнопки наверх
$(window).scroll(function(){
	if ($(this).scrollTop() > $(this).height()) {
		$('.top').addClass('active');
	}else{
		$('.top').removeClass('active');
	}
});


$('.top').click(function() {
	$('html, body').stop().animate({scrollTop: 0},'slow', 'swing');
});

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.succes').removeClass('active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
	
//Resize Window
	function onResize() {
		$('.carousel-services-content').equalHeights();
	}onResize();
	window.onresize = function() {onResize()};

	$('select') .selectize();

});

//Определяет время работЫ прелоадера, при полной загрузке страницы прелоадер исчезает
$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});