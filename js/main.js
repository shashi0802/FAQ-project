$(document).ready(function () {
    $('a[href*="#"]').click(function (e) {
        e.preventDefault(); 
        var target = $(this).attr("href");
        $('html body').animate({
            scrollTop: $(target).offset().top - 70,
        }, 1000);
        
    });
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    console.log(scrollDistance);
    if(scrollDistance > 0){
        $(".header").addClass("fixed");
    }
    else{
        $(".header").removeClass("fixed");
    }
    // Assign active class to nav links while scolling
    $('.activity-section').each(function (i) {        
        if ($(this).position().top <= scrollDistance+100) {            
            $('.navbar a.active').removeClass('active');
            $('.navbar a').eq(i).addClass('active');
            // $(this).eq(i).addClass('active');
        }
    });
}).scroll();