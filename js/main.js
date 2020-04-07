$(window).scroll(function() {
    var nav = $('.navbar');
    if ($(this).width() > 575.98) {
        var top = 306;
        if ($(window).scrollTop() >= top) {
            nav.addClass('fixed');
        } else {
            nav.removeClass('fixed');
        }
    } else {
        var topmob = 100;
        if ($(window).scrollTop() >= topmob) {
            nav.addClass('mobfixed')
        } else {
            nav.removeClass('mobfixed')
        };
    }

});


var owl = $('.screenshot-carousel');
owl.owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    dots: false,
    center: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            autoWidth: true,
            margin: 30
        },
        767.98: {
            items: 3,
            autoWidth: true,
            margin: 20,
        },
        991.98: {
            items: 5,
            margin: 30,
            autoWidth: true,
        },
        1199.98: {
            items: 5,
            margin: 30,
            autoWidth: true,
        },
    }
});
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})

var team = $('.team-carousel');
team.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        767.98: {
            items: 2,
        },
        991.98: {
            items: 3,
        },
    }
});



var blog = $('.blog-carousel');
blog.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: true,
        },
        767.98: {
            items: 2,
            dots: false,
        },

    }
})


var price = $('.price-carousel');
price.owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        767.98: {
            items: 2,
        },
        991.98: {
            items: 3,
        },
    }
});



var testimonial = $('.testimonial-carousel');
testimonial.owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        767.98: {
            items: 1,
        },
        991.98: {
            items: 1,
            // nav : true,
        },
    }
});

function myFunction() {
    var element = document.getElementById("color");
    element.classList.add("mystyle");
}