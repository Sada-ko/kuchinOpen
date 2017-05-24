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
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right ml-3' aria-hidden='true'></i>"],
        autoWidth:true
        //items:4
    });
});