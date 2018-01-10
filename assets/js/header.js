emergence.init();

var hdrHeight = window.innerHeight * .6;
var logoHeight = hdrHeight *.8;
var logoWidth = logoHeight * 2.33;
var bodyPad = hdrHeight + 20;
var hdrWidth = window.innerWidth;
var small = false;

$('.navbar-lg').css("height", hdrHeight);
$('.logo').css("height", logoHeight);
$('body').css("padding-top", bodyPad);        

var logoMarginLeft = (hdrWidth - logoWidth)/2;

$('a.navbar-brand').css("margin", "0px 0px 0px " + logoMarginLeft + "px" );

$(window).scroll(function() {
    if (($(document).scrollTop() > 50) && !(small)) {
        $('.logo').attr('src', 'assets/images/ViViD_Web_logo_LLC.svg');
        $('.byname').addClass("byname-sm");
        $('.byname').removeClass("byname-lg");
        $('.navbar-nav').addClass("navbar-nav-sm");
        $('.navbar-nav').removeClass("navbar-nav-lg");
        $('.navbar').addClass("navbar-sm");
        $('.navbar').removeClass("navbar-lg");
        $('.logo').addClass("logo-sm");
        $('.logo').removeClass("logo-lg");
        // $('.navbar-sm').css("height", 73);
        // $('.logo').css("height", 87);
        // $('a.navbar-brand').css("margin", "-40px 0 0px -160px");
        $('.navbar-sm').animate({height: 73}, {duration: 3000, easing: "swing"});
        $('.logo').animate({height: 87}, {duration: 3000, easing: "swing"})
        $('a.navbar-brand').animate({margin: "-40px 0 0px -160px"}, {duration: 3000, easing: "swing"})
        // $('body').css("padding-top", 120);  
        $('body').animate({paddingTop: 120}, {duration: 3000, easing: "swing"});      
        small = true;
    } else if (($(document).scrollTop() === 0) && (small)) {
        hdrHeight = window.innerHeight * .6;
        logoHeight = hdrHeight *.8;
        logoWidth = logoHeight * 2.33;
        bodyPad = hdrHeight + 20;
        hdrWidth = window.innerWidth;

        $('.logo').attr('src', 'assets/images/ViViD_Web_logo_LLC.svg');
        $('.byname').removeClass("byname-sm");
        $('.byname').addClass("byname-lg");
        $('.navbar-nav').removeClass("navbar-nav-sm");
        $('.navbar-nav').addClass("navbar-nav-lg");
        $('.navbar').removeClass("navbar-sm");
        $('.navbar').addClass("navbar-lg");
        $('.logo').removeClass("logo-sm");
        $('.logo').addClass("logo-lg");
        // $('.navbar-lg').css("height", hdrHeight);
        $('.navbar-lg').animate({height: hdrHeight}, {duration: 3000, easing: "swing"});
        // $('.logo').css("height", logoHeight);
        // $('body').css("padding-top", bodyPad);
        $('body').animate({paddingTop: bodyPad}, {duration: 3000, easing: "swing"});
        logoMarginLeft = (hdrWidth - logoWidth)/2;
        $('.logo').animate({height: logoHeight}, {duration: 3000, easing: "swing"})
        $('a.navbar-brand').animate({margin: "0px 0px 0px " + logoMarginLeft + "px"}, {duration: 3000, easing: "swing"})
        small = false;
        // $('a.navbar-brand').css("margin", "0px 0px 0px " + logoMarginLeft + "px" );
        
    }
});