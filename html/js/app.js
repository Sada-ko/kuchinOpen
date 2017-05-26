/**
 * Created by Sada-Mac on 16/05/17.
 */

//BG images
$(document).ready(function () {
    $('.fill-box').fillBox();

    //Owl Carousel
    $(".event_short_gallery.owl-carousel").owlCarousel({
        nav: true,
        loop:true,
        navText: ["<i class='fa fa-angle-left fa-2x' aria-hidden='true'></i>","<i class='fa fa-angle-right fa-2x ml-3' aria-hidden='true'></i>"],
        autoWidth:true
    });

    $(".owl-carousel").owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right ml-3' aria-hidden='true'></i>"],
        autoWidth:true
    });
});