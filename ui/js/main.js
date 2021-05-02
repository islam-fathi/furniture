$(document).ready(function() {

    'use strice'

    $('.categories-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: '60px',
        arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

    $('.winter-sale-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerPadding: '60px',
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>"

    })

    // about us accordion
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function() {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function() {
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus base-color");
        $(this).prev(".card-header").find('span').addClass('base-color');
    }).on('hide.bs.collapse', function() {
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus base-color").addClass("fa-plus");
        $(this).prev(".card-header").find('span').removeClass('base-color')
    });

})
