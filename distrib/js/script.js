var swiperContent = new Swiper('.js-content-slider', {
        slidesPerView: 'auto',
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      mousewheel: true,
      on: {
        slideChangeTransitionStart: function () {           

            if (swiperContent.isEnd == false) {
                anime({
                  targets: '.sidebar',
                  translateY: 0,
                  easing: 'linear',
                  duration: 100
                });
                $('.header').removeClass('header_last-section');
                switch (swiperContent.activeIndex) {
                    case 0:
                        $('.header').removeClass('header_black');
                        $('.sidebar').removeClass('sidebar_black sidebar_bg');
                        break;
                    case 1:
                        $('.header').addClass('header_white').removeClass('header_black');
                        $('.sidebar').addClass('sidebar_black').removeClass('sidebar_bg');
                        break;
                    case 2:
                        $('.header').addClass('header_black').removeClass('header_white');
                        $('.sidebar').addClass('sidebar_black').removeClass('sidebar_bg');
                        break;
                    case 3:
                        $('.header').addClass('header_black').removeClass('header_white');
                        $('.sidebar').addClass('sidebar_black').removeClass('sidebar_bg');
                        $('.counter').each(function() {
                          var $this = $(this),
                              countTo = $this.attr('data-count');
                          $({ countNum: $this.text()}).animate({
                            countNum: countTo
                          },
                          {
                            duration: 1500,
                            easing:'swing',
                            step: function() {
                              $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                              $this.text(this.countNum);
                              anime({
                                  targets: '.counter',
                                  translateY: '-18px',
                                  delay: anime.stagger(200) // increase delay by 100ms for each elements.
                                });
                            }

                          });  
                        });
                        break;
                    case 4:
                        $('.header').addClass('header_white').removeClass('header_black');
                        // $('.sidebar').addClass('sidebar_black').removeClass('sidebar_bg');
                        break;
                    case 5:
                        $('.header').addClass('header_white').removeClass('header_black');
                        // $('.sidebar').addClass('sidebar_black sidebar_bg');
                        break;
                    case 6:
                        $('.header').removeClass('header_black').removeClass('header_white');
                        $('.sidebar').removeClass('sidebar_black sidebar_bg');
                        break;
                    case 7:
                        $('.header').addClass('header_black');
                        $('.sidebar').addClass('sidebar_black');
                        break;
                    default:;
                }
            } else {
                $('.header').addClass('header_last-section');
                var footerHeight = $('.footer').height();
                anime({
                  targets: '.sidebar',
                  translateY: -(footerHeight),
                  easing: 'linear',
                  duration: 100
                });
            }
        },
        slideChange: function() {
            // $('.sidebar__num').removeClass('sidebar__num_active');
            // $('.sidebar__num').eq(swiperContent.activeIndex).addClass('sidebar__num_active');

            var ggg = $('.content-slider .content-slide').eq(swiperContent.activeIndex);
            var yyy = $(ggg).find('.hideme').addClass('hideme_visible');
        }
      }
    });

$(window).scroll(function() {
    $('.js-fancy-heading').each(function() {
        if( $(this).visible(true) ) {  
            $(this).addClass('lines-added')
        }        
    });
});



$(document).ready(function(){
    setTimeout(function() {
        $('.preloader').addClass('preloader_hidden');
    }, 1000);
    
    $('.js-show-menu-lvl-2').click(function() {
        var categoryInMenu = $(this).data('menu-lvl-2');
        $('.menu-sidebar__caregory').removeClass('menu-sidebar__caregory_active').hide();
        $('#'+categoryInMenu).addClass('menu-sidebar__caregory_active').fadeIn(300);

        $('.sidebar__link').removeClass('sidebar__link_active');
        $(this).addClass('sidebar__link_active');
        $('.menu-sidebar').addClass('menu-sidebar_active');
        $('.content').addClass('content_blurred');
        $('.overlay_blur').fadeIn(300);
    });

    $('.js-close-menu-sidebar').click(function() {
        $('.sidebar__link').removeClass('sidebar__link_active');
        $('.menu-sidebar').removeClass('menu-sidebar_active');
        $('.content').removeClass('content_blurred');
        $('.overlay_blur').fadeOut(300);
    });

    $('.js-open-main-menu').click(function() {
        $('.menu').addClass('menu_active');
        setTimeout(function() {
            $('.hideme').addClass('hideme_visible');
        },600);
    });

    $('.js-close-main-menu').click(function() {
        $('.hideme').removeClass('hideme_visible');
        setTimeout(function() {
            $('.menu').removeClass('menu_active');
        },600);
    });

    $('.content-slide').eq(0).find('.hideme').addClass('hideme_visible');




    // $('.js-slide-to-section').click(function() {
    //     var slideTo = $(this).data('slide');
    //     swiperContent.slideTo(slideTo-1);
    //     $('.sidebar__num').removeClass('sidebar__num_active')
    //     $('.sidebar__num').eq(slideTo-1).addClass('sidebar__num_active')
    // });


    var swiperHero = new Swiper('.js-hero-slider', {
      mousewheel: false,
      navigation: {
        nextEl: '.js-hero-slider-next',
        prevEl: '.js-hero-slider-prev',
      },
      on: {
        init: function() {
            // var heroSliderTotalSlides = $('.hero-slider .swiper-slide').length;
            // $('.hero-slider__total').html('0'+heroSliderTotalSlides);
        },
         slideChange: function() {
            // $('.hero-slider__current').html('0'+(swiperHero.activeIndex+1));
            // $('.sidebar__num').eq(swiperContent.activeIndex).addClass('sidebar__num_active');
        },
      }
    });



    var swiperOne = new Swiper('.slider-holder-one .swiper-container', {
      navigation: {
        nextEl: '.slider-holder-one .swiper-button-next',
        prevEl: '.slider-holder-one .swiper-button-prev',
      },
    });

    var swiperTwo = new Swiper('.slider-holder-two .swiper-container', {
      navigation: {
        nextEl: '.slider-holder-two .swiper-button-next',
        prevEl: '.slider-holder-two .swiper-button-prev',
      },
    });


    // slider-photo-small_1

    // var swiperPhoto = new Swiper('.swiper-container', {
    //     navigation: {
    //         nextEl: ('.swiper-button-next'),
    //         prevEl: ('.swiper-button-prev'),
    //     },
    // });



    // var swiperPhoto = new Swiper('.slider-photo-small .swiper-container', {
    //     self = $(this);
    //     navigation: {
    //         nextEl: ('.swiper-button-next'),
    //         prevEl: ('.swiper-button-prev'),
    //     },
    // });



        // анимация стрелок в карточке товара
        $('.product-controls__arrow-up, .product-controls__arrow-down').on('mousedown', function() {
            $(this).addClass('pressed');
        });
        $('.product-controls__arrow-up, .product-controls__arrow-down').on('mouseup', function() {
            $(this).removeClass('pressed');
        });







        // все товары - скролл до секции
        $("#scrollToFeatures").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#scrollToFeatures").offset().top
            }, 600);
        });






        // функционал внутри меню каталога

        $('.js-show-product-category-list').on('click', function() {

            if ($( window ).width() > 768) { // Если десктоп, показываем соответствующую подкатегорию справа
                var categoryID = $(this).attr('id');
                var categoryProdList = $('.product-category-list[data-id="'+categoryID+'"]');

                $('.product-category-list').removeClass('active');
                $(categoryProdList).addClass('active');

                $('.catalog-link__label').removeClass('active');
                $(this).addClass('active');
            } else { // Если мобилка, раскрываем аккордеон

                if( !$(this).hasClass('active') ) {
                    $('.catalog-link__label').removeClass('active');
                    $(this).addClass('active');

                    $('.catalog-link .catalog-link__accordeon').slideUp(300);
                    $(this).parent().find('.catalog-link__accordeon').slideDown(300);
                }
            }

        });






        // открытие каталога - разные варианты

        $('.js-catalog-menu').on('click', function() {
            
            // if ($( window ).width() > 768) {
                var catalogBtnType = $(this).attr('id');


                if(catalogBtnType == 'catalog-menu-in-promo') { // меню поверх промо-блока
                    if( $('#catalog-menu').hasClass('active') ) {
                        $('#catalog-menu').removeClass('menu_catalog menu_sticky active');
                        $('.overlay_catalog-menu').hide();
                    }else {
                        $('#catalog-menu').addClass('menu_catalog active');
                        $('.overlay_catalog-menu').show();
                    }
                }

                if(catalogBtnType == 'catalog-menu-in-sticky-header') { // меню в прилипающей шапке
                    if( $('#catalog-menu').hasClass('active') ) {
                        $('#catalog-menu').removeClass('menu_catalog menu_sticky active');
                        $('.page-wrapper').removeClass('no-scroll');
                    }else {
                        $('#catalog-menu').addClass('menu_sticky active');
                        $('.page-wrapper').addClass('no-scroll');
                    }
                }
            // } else { 
            //     if( $('.menu_full-screen').hasClass('active') ) {
            //         $('.menu_full-screen').removeClass('menu_catalog menu_sticky menu_mobile active');
            //         $('.page-wrapper').removeClass('no-scroll');
            //     }else {
            //         $('.menu_full-screen').addClass('menu_mobile active');
            //         $('.page-wrapper').addClass('no-scroll');
            //     }
            // }


            $('.overlay_catalog-menu').on('click', function() {
                $('.menu_full-screen').removeClass('menu_catalog menu_sticky active');
                $('.overlay_catalog-menu').hide();
            });
        });







        // открытие и закрытие корзины

        $('.js-basket-controls').on('click', function() {
            if( !$('.basket').hasClass('active') ) {
                $('.basket').addClass('active');
                $('.overlay_basket').fadeIn(300);
                $('.page-wrapper').addClass('no-scroll');
            } else {
                $('.basket').removeClass('active');
                $('.overlay_basket').fadeOut(300);
                $('.page-wrapper').removeClass('no-scroll');
            }
        });





        // мобильное меню
        $('.js-open-mobile-menu').on('click', function() {

            if( !$('#mobile-menu').hasClass('active') ) {
                $('#mobile-menu').addClass('active');
                $('.page-wrapper').addClass('no-scroll');
            } else {
                $('#mobile-menu').removeClass('active');
                $('.page-wrapper').removeClass('no-scroll');
            }
        });






        // красивое наведение на партнеров

        $('.partners').on('mouseenter', function() {
            $('.partners .partner-thumb').addClass('blurred');
        });
        $('.partners').on('mouseleave', function() {
            $('.partners .partner-thumb ').removeClass('blurred');
        });

        $('.partners .partner-thumb').on('mouseenter', function() {
            $(this).addClass('active');
        });
        $('.partners .partner-thumb').on('mouseleave', function() {
            $(this).removeClass('active');
        });






        // сортировка товаров
        $('.js-prod-sort').on('click', function() {
            $('.js-prod-sort').removeClass('active');
            $(this).addClass('active');
        });


        // вид вывода товаров
        $('.js-prod-view').on('click', function() {
            $('.js-prod-view').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-show-filters').on('click', function() {
            if(!$('.filters').hasClass('active')) {
                $('.filters').addClass('active');
                $('.overlay_filters').fadeIn(300);
            } else {
                $('.filters').removeClass('active');
                $('.overlay_filters').fadeOut(300);
            }
        });















// 2. появления
// ==============

    // функция, которая "собирает" первый слайд. Запускается после прелоадера. См. прелоадер



    // function lookMa() {
    //     $('.hero').removeClass('up');
    //     $('.swiper-slide').find('.hero__slide-number, .hero__info h1, .hero__info p, .hero__info a, .hero__img').removeClass('up');
    // }

    // // шторки
    // $(window).scroll(function() {
    //     $('.trigger').each(function() {
    //         if( $(this).visible(true) ) {  
    //             $(this).find('.hideme').addClass('hideme_visible');
    //             $(this).find('.zero').removeClass('zero_hidden');
    //             $(this).find('.bg-square').removeClass('bg-square_anim');
    //         }        
    //     });
    // });












        // function openMenu() {
        //     if ( !$('.menu').hasClass('menu_active') ) {
        //         $('.menu').addClass('menu_active');
        //         $('.menu .col-4').addClass('visible'); //анимации появления колонок
        //         $('body').addClass('no-scroll');
        //     } else {
        //         $('.menu').removeClass('menu_active');
        //         $('.menu .col-4').removeClass('visible');
        //         $('body').removeClass('no-scroll');
        //     }
        // }

        // $('.js-menu-controls').click(openMenu);


        $(document).on( 'keydown', function ( e ) {
            if ( e.keyCode === 27 ) {
                if ( $('.menu-sidebar').hasClass('menu-sidebar_active') ) {
                    $('.sidebar__link').removeClass('sidebar__link_active');
                    $('.menu-sidebar').removeClass('menu-sidebar_active');
                    $('.content').removeClass('content_blurred');
                    $('.overlay_blur').fadeOut(300);
                }
            }
        });










// 4. форма
// ==============


    $('.js-floating-label').blur();

    $('.js-floating-label').on('focus', function() {
        $(this).parent().find('.signup-form__floating-placeholder').addClass('float');
        $(this).parent().addClass('active');
    });

    $('.js-floating-label').on('blur', function() {
        if($(this).val()!=""){} else {
            $(this).parent().find('.signup-form__floating-placeholder').removeClass('float');
            $(this).parent().removeClass('active');
        };
    });








    function showStickyHeader() {
        if ( window.pageYOffset > 293 ) {
           $('.sticky-header').addClass('visible');
        }
        else {
            $('.sticky-header').removeClass('visible');
        }
    };

    $(window).scroll(showStickyHeader); 




    $(document).ready(function(){   


        $(".js-open-modal").on('click', function(){

            $('.modal').removeClass('modal_active');
            $('.overlay_modal').fadeOut(400);                          

            var modalName = $(this).data('target');                        
            var modal = $('#' + modalName);

            if( !$(modal).hasClass('modal_active') ) {
                $(modal).addClass('modal_active');
                $('.overlay_modal').fadeIn(400);                          
            } else {
                $(modal).removeClass('modal_active');                          
                $('.overlay_modal').fadeOut(400);                          
            }
        });

        $(".js-close-modal").on('click', function(){
            $('.modal').removeClass('modal_active');
            $('.overlay_modal').fadeOut(400);                          
        });

    });


    // отправка колбека
    $(".modal form").on('submit', function(e){
            e.preventDefault();
            var modal = $(this).parents('.modal');
            var form = $(this);         
            $(this).ajaxSubmit({  
                url: "/ajax.php?file="+$(form).data('file'),
                data: $(form).serialize(),
                dataType: "JSON",
                type: "POST",
                success: function(data){
                    if(data.done) {
          $(modal).find('.modal-result').html(data.message);
          $(modal).find('.modal-result').show('fast')
          setTimeout("$('.modal-result').hide('fast')",1500);

          setTimeout("$('.modal').hide()",2000);
                      setTimeout("$('#overlay').hide()",2000);
          var f=$(modal).find('.modal-content-copy');
          var t=$(modal).find('.modal-content');
                      setTimeout("$('.modal').find('input, textarea').val('')",3000);
          
                    } else {
                        $(modal).find('.modal-errors').html(data.message);
        $(modal).find('.modal-errors').show('fast')
        setTimeout("$('.modal-errors').hide('fast')",1000);
                        $(modal).children(".spinner").hide();
                    }
                },
                complete: function(){
                    $(modal).children(".spinner").hide();                     
                }
            });
            return false;
        });



    function showToTopButton() {
        if ( window.pageYOffset > 500 ) {
           $('.to-top').addClass('to-top_visible')
        }
        else {
            $('.to-top').removeClass('to-top_visible')
        }
    }; 

    function scrollToTop() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    }; 
    $('.js-scroll-to-top').click(scrollToTop);
    $(window).scroll(showToTopButton);    

});


$(document).ready(function() {
    if ( $(window).width() < 992) {
        if (swiperContent.params.freeMode !== true) {
            swiperContent.params.freeMode = true;
        }
    }else {
        if (swiperContent.params.freeMode !== false) {
            swiperContent.params.freeMode = false;
        }
    }

    $(window).resize(function() {
        if ( $(window).width() < 992) {
            console.log('resize < 992')
            if (swiperContent.params.freeMode !== true) {
                swiperContent.params.freeMode = true;
            }
        }else {
            console.log('resize > 992')
            if (swiperContent.params.freeMode !== false) {
                swiperContent.params.freeMode = false;
            }
        }
    });

})
