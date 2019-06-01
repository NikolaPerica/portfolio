$(document).ready(function() {
    $(window).scroll(function(event) {
        let scroll = $(this).scrollTop();
        
        if (scroll >= 700) {
            $('.navbar').css('background-color', 'rgba(40, 48, 55, 1)');
        }
        else
        {
            $('.navbar').css('background-color', 'rgba(40, 48, 55, 0)');
            $('.navbar').css('color', 'rgb(0, 0, 0)');
        }
    });
});