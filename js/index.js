
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

  var mobile = false;
  if (window.innerWidth<=668) {
    mobile = true;
    $(".prices__offer").find(".prices__offer-content").slideUp();
    $(".prices__offer").find(".prices__price").slideUp();
    $(".prices__offer").removeClass("prices__offer_active");
    $(".prices__offer").click(function() {
      $(".prices__offer").not(this).find(".prices__offer-content").slideUp();
      $(this).find(".prices__offer-content").slideToggle();
      $(".prices__offer").not(this).find(".prices__price").slideUp();
      $(this).find(".prices__price").slideToggle();
      $(".prices__offer").not(this).removeClass("prices__offer_active");
      $(this).toggleClass("prices__offer_active");
    });
  }
  $(window).resize(function() {
    if (window.innerWidth<=668) {
      if (!mobile) {
        $(".prices__offer").find(".prices__offer-content").slideUp();
        $(".prices__offer").find(".prices__price").slideUp();
        $(".prices__offer").removeClass("prices__offer_active");
        console.log("there");
        console.log(mobile);
        mobile = true;
        // $('.prices__offer').addClass("prices__offer_mobile");
        $(".prices__offer").click(function() {
          $(".prices__offer").not(this).find(".prices__offer-content").slideUp();
          $(this).find(".prices__offer-content").slideToggle();
          $(".prices__offer").not(this).find(".prices__price").slideUp();
          $(this).find(".prices__price").slideToggle();
          $(".prices__offer").not(this).removeClass("prices__offer_active");
          $(this).toggleClass("prices__offer_active");
        });
      }
    } else {
      mobile = false;
      $(".prices__offer").off();
      $('.prices__offer').removeClass("prices__offer_active");
      $(".prices__offer").eq($(".prices__tab_active").index()).addClass("prices__offer_active");
      $(".prices__offer").find(".prices__offer-content").slideDown();
      $(".prices__offer").find(".prices__price").slideDown();
    }
  });
  $(".order-btn, .order-btn__mobile, .man__order").click(function() {
    $(".popup").addClass("shown");
    $("body").addClass("stop");
  });
  $(document).click(function(e) {
    if ($(e.target).hasClass("popup")) {
      $(".popup").removeClass("shown");
      $("body").removeClass("stop");
    }
  });
  var params = document.getElementsByClassName('prices__params');
  for (var i = 0; i < params.length; i++) {
    new SimpleBar(params[i], { autoHide: false });
  }
});
