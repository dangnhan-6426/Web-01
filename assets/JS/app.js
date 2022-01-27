$(document).ready(function(){
    $('.new-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.prev-new'),
        nextArrow: $('.next-new'),
        dots: true,
        responsesive:[
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
            }
        }
        ]
    });  

    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.prev-blog'),
        nextArrow: $('.next-blog'),
        dots: true,
        responsesive:[
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
            }
        }
        ]
    });
});
