$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        // $('.byname').css('top', '11px').css('left', '-81px');
        // $('.navbar').css('border-top', '50px solid transparent');
        // $('#logo').css('margin', '-87px 0 0px -160px');
        $('.logo').attr('src', 'assets/images/ViVi_Web_Logo.svg');
        $('.byname').addClass("byname-sm");
        $('.byname').removeClass("byname-lg");
        $('.navbar').addClass("navbar-sm");
        $('.navbar').removeClass("navbar-lg");
        $('.logo').addClass("logo-sm");
        $('.logo').removeClass("logo-lg");
    } else {
        // $('.byname').css('top', '0px').css('left', '0px');
        // $('.navbar').css('border-top', '23px solid transparent');
        // $('#logo').css('margin', '-64px 0 0px -160px');
        // $('#logo').css('width', '156px');
        $('.logo').attr('src', 'assets/images/ViVi_Web_Logo_03.svg');
        $('.byname').removeClass("byname-sm");
        $('.byname').addClass("byname-lg");
        $('.navbar').removeClass("navbar-sm");
        $('.navbar').addClass("navbar-lg");
        $('.logo').removeClass("logo-sm");
        $('.logo').addClass("logo-lg");
    }
});