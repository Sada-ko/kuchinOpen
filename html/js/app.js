/**
 * Created by Sada-Mac on 16/05/17.
 */

//Slick Carousel
//$('.slick-carousel').slick({
//    //dots: true,
//    infinite: false,
//    speed: 300,
//    slidesToShow: 1,
//    variableWidth: true,
//    swipeToSlide: true
    //rtl: true
    //adaptiveHeight: true,
    //slidesToScroll: 4
//});

//BG images
$(document).ready(function () {
    $('.fill-box').fillBox();
});

//Owl Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:10,
        nav: true,
        //navElement: "p",
        //loop:true,
        //navText: ["", ""],
        navText: ["<a class='w-100 h-100 d-block border-0'></a>","<a class='w-100 h-100 d-block border-0'></a>"],
        autoWidth:true,
        items:4
    });
    //$( ".owl-prev").html('<a class="owl-prev border-0"></a>:);
    //$( ".owl-next").html('<a class="owl-next border-0"></a>');
});