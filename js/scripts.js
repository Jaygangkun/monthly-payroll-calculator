(function($){
    $(document).ready(function(){
        // $('.home-hero-slider').slick({
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     dots: true,
        //     infinite: true,
        //     arrows: false,
        //     autoplay: true
        // }).on('afterChange', function(slick, currentSlide){
        //     $('.home-hero-slick-dot').removeClass('active');
        //     $('.home-hero-slick-dot[index="' + currentSlide.currentSlide + '"]').addClass('active');
        // });

        // $(document).on('click', '.home-hero-slick-dot', function(){
        //     $('.home-hero-slick-dot').removeClass('active');
        //     $(this).addClass("active");
        //     var index = parseInt($(this).attr('index'));
        //     $('.home-hero-slider').slick('slickGoTo', index);
        // })

        $(document).on('click', '.home-question-header', function(){
            var question_row = $(this).parents('.home-question-row');
            if($(question_row).hasClass('open')){
                $(question_row).removeClass('open');
                $(question_row).find('.home-question-body').slideUp();
            }
            else{
                $(question_row).addClass('open');
                $(question_row).find('.home-question-body').slideDown();
            }

        })

        if($('.firm-history-slider').length > 0){
            $('.firm-history-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                arrows: true,
                nextArrow: $('.firm-history-slider-next-icon'),
                prevArrow: $('.firm-history-slider-prev-icon')
            });
        }

        // if($('.link-video-popup').length > 0){
        //     $(".link-video-popup").fancybox({
        //         'hideOnContentClick': true
        //     });
    
            $(document).on('click', '.link-video-popup', function(){
                $('.firm-video-img-wrap video').show();
                $('.firm-video-img-wrap video').get(0).play();
                $('.firm-video-img-wrap').addClass('play-video');
                $(this).hide();
                // var target = $(this).attr('href');
                // $(target).find('iframe').attr('src', $(target).find('iframe').attr('data-src'));
            })
        // }

        $(document).on('click', '.home-hero-drop-down-icon-wrap', function(){            
            $('html,body').animate(
                { 
                    scrollTop: $('.home-hero').next().offset().top
                }
            ); 
        })

        if (window.location.hash.length != 0){
            var pos = $(window.location.hash).offset().top;
            // animated top scrolling
            window.scrollTo(0, 0);
            $('body, html').animate({scrollTop: pos});
        }

        $(document).on('click', 'a[href^="/#"]', function(e) {
            // target element id
            var id = $(this).attr('href');
            id = id.substring(1);
            // target element
            var $id = $(id);
            if ($id.length === 0) {
                return;
            }
        
            // prevent standard hash navigation (avoid blinking in IE)
            e.preventDefault();
        
            // top position relative to the document
            var pos = $id.offset().top;
        
            // animated top scrolling
            $('body, html').animate({scrollTop: pos});
        });

        $(document).on('click', '.header-hamburger-icon__img', function(){
            $('.mobile-menu').show();
            $('body').addClass('mobile-menu-open');
        })

        $(document).on('click', '.mobile-menu-close__img', function(){
            $('.mobile-menu').hide();
            $('body').removeClass('mobile-menu-open');
        })
    })
})(jQuery)