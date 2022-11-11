$(window).on("load", function () {
    $(".preloader").fadeOut('slow'), $(".preloader").remove();
  }),

$(document).ready(function(){
    AOS.init({
        duration: 1200,
    })

    
})

$(".scroll-todown").click(()=>{
    $('html, body').animate({
        scrollTop: $(".usp").offset().top -50
    }, 300);
})

var action = 'click';
$(document).on(action, 'li.question', function() {
    $(this).next().slideToggle(200)
        .siblings("li.answer").slideUp();

    var img = $(this).children('i');

    $('i').not(img).removeClass('rotate').css("transition", "all .2s ease")
    img.toggleClass('rotate')
})