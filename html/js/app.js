/**
 * Created by Sada-Mac on 16/05/17.
 */

//BG images
$(document).ready(function () {
    $('.fill-box').fillBox();
});

//Owl Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        //margin:10,
        nav: true,
        navText: ["<a class='w-100 h-100 d-block border-0'></a>","<a class='w-100 h-100 d-block border-0'></a>"],
        autoWidth:true
        //items:4
    });
});