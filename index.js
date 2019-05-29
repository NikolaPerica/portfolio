$(document).ready(function() {
    $(window).scroll(function(event) {
        let scroll = $(this).scrollTop();
        
        if (scroll >= 700) {
            $('.navbar').css('background-color', 'rgba(240, 248, 255, 1)');
        }
        else
        {
            $('.navbar').css('background-color', 'rgba(240, 248, 255, 0)');
            $('.navbar').css('color', 'rgb(10, 6, 54)');
        }
    });
});