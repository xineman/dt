$(function() {
  $(".top-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: "top-slider__dots container",
    draggable: false
  });
  $(document).scroll(function() {
    if ($(document).scrollTop()) {
      $(".header").addClass("header_fixed");
    } else {
      $(".header").removeClass("header_fixed");
    }
  });
  var triggersSlider = false;
  $(window).resize(function() {
    if (window.innerWidth<=1170 && !triggersSlider) {
      $(".top__triggers").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        dotsClass: "top__triggers__dots",
        draggable: false
      });
      triggersSlider = true;
    } else if (window.innerWidth>1170 && triggersSlider) {
      $(".top__triggers").slick("unslick");
      triggersSlider = false;
    }
  });
  if (window.innerWidth<=1170) {
    $(".top__triggers").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: true,
      dotsClass: "top__triggers__dots",
      draggable: false
    });
    triggersSlider = true;
  }
  $(".header__burger").click(function() {
    $(".header__menu-wrapper").addClass("active");
  });
  $(".header__menu-close").click(function() {
    $(".header__menu-wrapper").removeClass("active");
  });
  $(".prices__tab").click(function() {
    $(".prices__tab").removeClass("prices__tab_active");
    $(this).addClass("prices__tab_active");
    $(".prices__offer").removeClass("prices__offer_active");
    $(".prices__offer").eq($(this).index()).addClass("prices__offer_active");
  });
});
