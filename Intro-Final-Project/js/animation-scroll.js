$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();
         console.log(verticalScroll);

        if(verticalScroll >= 2140) {

            $('#find-me').addClass('animated slideInLeft');
            $('#find-me').removeClass('hide_me');
            
        }

    });
});