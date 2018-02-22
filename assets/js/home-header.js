emergence.init();

$(document).ready(function () {

  if (window.innerWidth > 768) {

  var hdrHeight = window.innerHeight * 0.6;
  var logoHeight = hdrHeight * 0.8;
  var logoWidth = logoHeight * 2.33;
  var bodyPad = hdrHeight + 20;
  var hdrWidth = window.innerWidth;
  var vividDefMargin = logoHeight - 50;
  var logoMarginLeft = (hdrWidth - logoWidth) / 2;
  var small = false;
  var mainHeight = window.innerHeight - 90;

  $('#vivid-def').removeClass("hidden");

  $(".main-container").css('min-height', mainHeight);

  $(".byname").css('display', 'none');
  $(".hm-logo-lg").css("margin-top", -50);

  $(".navbar").animate({
    height: hdrHeight
  }, {
    duration: 2000,
    easing: "swing"
  });

  $("body").animate({
    paddingTop: bodyPad
  }, {
    duration: 2000,
    easing: "swing"
  });

  $(".logo").css("height", logoHeight);
  $(".logo").animate({
    height: "show"
  }, {
    duration: 2000,
    easing: "swing"
  });
  $("a.navbar-brand").animate({
    margin: "0px 0px 0px " + logoMarginLeft + "px"
  }, {
    duration: 2000,
    easing: "swing"
  });

  $("#vivid-def").css("margin-top", vividDefMargin);
  $("#vivid-def").animate({
    height: "show"
  }, {
    duration: 3000,
    easing: "linear"
  });




  // $(".hm-navbar-lg").css("height", hdrHeight);
  // $("body").css("padding-top", bodyPad);


  $("a.navbar-brand").css("margin", "0px 0px 0px " + logoMarginLeft + "px");

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50 && !small) {
      $(".byname").addClass("hm-byname-sm");

      $("#vivid-def").animate({
        height: "hide"
      }, {
        duration: 500,
        easing: "linear"
      });
      $(".byname").animate({
        height: "show"
      }, {
        duration: 2000,
        easing: "linear"
      });

      $(".navbar").animate({
        height: 73
      }, {
        duration: 2000,
        easing: "swing"
      });
      $(".logo").animate({
        height: 87
      }, {
        duration: 2000,
        easing: "swing"
      });
      $("a.navbar-brand").animate({
        margin: "-40px 0 0px -25px"
      }, {
        duration: 2000,
        easing: "swing"
      });
      $("body").animate({
        paddingTop: 120
      }, {
        duration: 2000,
        easing: "swing"
      });
      small = true;
    } else if ($(document).scrollTop() === 0 && small) {
      hdrHeight = window.innerHeight * 0.6;
      logoHeight = hdrHeight * 0.8;
      logoWidth = logoHeight * 2.33;
      bodyPad = hdrHeight + 20;
      hdrWidth = window.innerWidth;

      $(".byname").removeClass("hm-byname-sm");

      $(".navbar").animate({
        height: hdrHeight
      }, {
        duration: 2000,
        easing: "swing"
      });

      $(".byname").animate({
        height: "hide"
      }, {
        duration: 10,
        easing: "linear"
      });
      $("body").animate({
        paddingTop: bodyPad
      }, {
        duration: 2000,
        easing: "swing"
      });
      logoMarginLeft = (hdrWidth - logoWidth) / 2;
      $(".logo").animate({
        height: logoHeight
      }, {
        duration: 2000,
        easing: "swing"
      });
      $("a.navbar-brand").animate({
        margin: "0px 0px 0px " + logoMarginLeft + "px"
      }, {
        duration: 2000,
        easing: "swing"
      });
      $("#vivid-def").animate({
        height: "show"
      }, {
        duration: 3000,
        easing: "linear"
      });

      small = false;
    }
  });

} else {
  $('nav').removeClass("hm-navbar-lg").addClass("navbar-lg");
  $('.logo').removeClass("hm-logo-lg").addClass("logo-lg").removeAttr("style");
  $('.byname').removeClass("hm-byname-lg").addClass("byname-lg byname-ani");
  $('#vivid-def').addClass("hidden");

  // $(window).scroll(function() {
  //   if ($(document).scrollTop() > 50) {
  //       $('.logo').attr('src', 'assets/images/ViViD_Web_logo_LLC.svg');
  //       $('.byname').addClass("byname-sm");
  //       $('.byname').removeClass("byname-lg");
  //       $('.navbar-nav').addClass("navbar-nav-sm");
  //       $('.navbar-nav').removeClass("navbar-nav-lg");
  //       $('.navbar').addClass("navbar-sm");
  //       $('.navbar').removeClass("navbar-lg");
  //       $('.logo').addClass("logo-sm");
  //       $('.logo').removeClass("logo-lg");
  //   } else {
  //       $('.logo').attr('src', 'assets/images/ViViD_Web_logo_LLC.svg');
  //       $('.byname').removeClass("byname-sm");
  //       $('.byname').addClass("byname-lg");
  //       $('.navbar-nav').removeClass("navbar-nav-sm");
  //       $('.navbar-nav').addClass("navbar-nav-lg");
  //       $('.navbar').removeClass("navbar-sm");
  //       $('.navbar').addClass("navbar-lg");
  //       $('.logo').removeClass("logo-sm");
  //       $('.logo').addClass("logo-lg");
  //   }
// });

}

});