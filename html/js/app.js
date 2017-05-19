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