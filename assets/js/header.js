emergence.init();

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.logo').attr('src', 'assets/images/ViViD_Web_logo_LLC.svg');
        $('.byname').addClass("byname-sm");
        $('.byname').removeClass("byname-lg");
        $('.navbar-nav').addClass("navbar-nav-sm");
        $('.navbar-nav').removeClass("navbar-nav-lg");
        $('.navbar').addClass("navbar-sm");
        $('.navbar').removeClass("navbar-lg");
        $('.logo').addClass("logo-sm");
        $('.logo').removeClass("logo-lg");
    } else {
        $('.logo').attr('src', 'assets/images/ViViD_Web_logo_LLC.svg');
        $('.byname').removeClass("byname-sm");
        $('.byname').addClass("byname-lg");
        $('.navbar-nav').removeClass("navbar-nav-sm");
        $('.navbar-nav').addClass("navbar-nav-lg");
        $('.navbar').removeClass("navbar-sm");
        $('.navbar').addClass("navbar-lg");
        $('.logo').removeClass("logo-sm");
        $('.logo').addClass("logo-lg");
    }
});