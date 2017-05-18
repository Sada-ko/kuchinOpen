/**
 * Created by Sada-Mac on 16/05/17.
 */

//Carousel
$('.slick-carousel').slick({
    //dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true
    //rtl: true
    //adaptiveHeight: true,
    //slidesToScroll: 4
});

//BG images
$(document).ready(function () {
    $('.fill-box').fillBox();
});