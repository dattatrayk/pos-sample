jQuery(document).ready(function($){  
    alert('Hi');
    $('.more-car-slider-wrap').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        centerPadding: '60px',
        centerMode: true,
        prevArrow: '<a title="Previous" class="slide-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
        nextArrow: '<a title="Next" class="slide-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0px',
                    prevArrow:'false',
                    nextArrow:'false',
                    centerMode: true
                }
            }
        ]
    });
    
});


