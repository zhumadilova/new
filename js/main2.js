$("#header-slider").owlCarousel({
    nav: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem:true,
    items:1,
    navText: false
});
$(document).ready(function () {
    $('.slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:false,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})

