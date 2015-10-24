// JavaScript source code
var main = function () {
    $('.fixed-nav-bar').find('.logo').click(function () {
        $('body').animate({
            left:'-285px'
        },200);


    });


}

$(doucument).ready(main);