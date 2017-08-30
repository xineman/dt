
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
    if ($(document).scrollTop() < $(".man-first").offset().top - 379) {
      $(".side-nav__item_active").removeClass("side-nav__item_active");
      $(".side-nav__item").eq(0).addClass("side-nav__item_active");
    }
    if ($(document).scrollTop() >= $(".man-first").offset().top - 379) {
      $(".side-nav__item_active").removeClass("side-nav__item_active");
      $(".side-nav__item").eq(1).addClass("side-nav__item_active");
    }
    if ($(document).scrollTop() >= $(".project_first").offset().top - 379) {
      $(".side-nav__item_active").removeClass("side-nav__item_active");
      $(".side-nav__item").eq(2).addClass("side-nav__item_active");
    }
    if ($(document).scrollTop() >= $(".project_second").offset().top - 379) {
      $(".side-nav__item_active").removeClass("side-nav__item_active");
      $(".side-nav__item").eq(3).addClass("side-nav__item_active");
    }
    if ($(document).scrollTop() >= $(".project_third").offset().top - 379) {
      $(".side-nav__item_active").removeClass("side-nav__item_active");
      $(".side-nav__item").eq(4).addClass("side-nav__item_active");
    }
    if ($(document).scrollTop() >= $(".man-second").offset().top - 379) {
      $(".side-nav__item_active").removeClass("side-nav__item_active");
      $(".side-nav__item").eq(5).addClass("side-nav__item_active");
    }
    var top;
    switch ($(this).index()) {
      case 0:
        top = $(".top-slider").offset().top;
        break;
      case 1:
        top = $(".man-first").offset().top - 79;
        break;
      case 2:
        top = $(".project_first").offset().top - 79;
        break;
      case 3:
        top = $(".project_second").offset().top - 79;
        break;
      case 4:
        top = $(".project_third").offset().top - 79;
        break;
      case 5:
        top = $(".man-second").offset().top - 79;
        break;
      default:
        top = 0;
    }
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
        dots: false,
        // dotsClass: "top__triggers__dots",
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
      dots: false,
      // dotsClass: "top__triggers__dots",
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
  $(".top").height("calc(100vh - "+$(".order-btn__mobile").outerHeight(true)+"px)");
  $(window).resize(function() {
    $(".top").height("calc(100vh - "+$(".order-btn__mobile").outerHeight(true)+"px)");
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
  $(".project__order, .order-btn, .order-btn__mobile, .man__order").click(function() {
    if ($(this).hasClass("project__order")) {
      $(".popup__title").text("Заказать проект");
    } else {
      $(".popup__title").text("Обсудить проект");
    }
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
  $(".side-nav__item").click(function(e) {
    $(".side-nav__item_active").removeClass("side-nav__item_active");
    $(this).addClass("side-nav__item_active");
    var top;
    switch ($(this).index()) {
      case 0:
        top = $(".top-slider").offset().top;
        break;
      case 1:
        top = $(".man-first").offset().top - 79;
        break;
      case 2:
        top = $(".project_first").offset().top - 79;
        break;
      case 3:
        top = $(".project_second").offset().top - 79;
        break;
      case 4:
        top = $(".project_third").offset().top - 79;
        break;
      case 5:
        top = $(".man-second").offset().top - 79;
        break;
      default:
        top = 0;
    }
    $("body").stop().animate({scrollTop: top});

  });
  $(".side-nav__arrow_up").click(function() {
    var index = $(".side-nav__item_active").index();
    if (index) {
      $(".side-nav__item").eq(index-1).trigger("click");
    }
  });
  $(".side-nav__arrow_down").click(function() {
    var index = $(".side-nav__item_active").index();
    if (index<$(".side-nav__item").length-1) {
      $(".side-nav__item").eq(index+1).trigger("click");
    }
  });


});
