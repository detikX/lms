$(window).on("load", function () {
    $(".preloader").fadeOut('slow'), $(".preloader").remove();
  }),

$(document).ready(function(){
    AOS.init({
        duration: 1200,
    })

    
})

// $(".scroll-totop").click(()=>{
//     $('html, body').animate({
//         scrollTop: $(".usp").offset().top -50
//     }, 300);
// })

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//         $('#scroll-totop').fadeIn();
//     } else {
//         $('#scroll-totop').fadeOut();
//     }
// });

$("#scroll-totop").hide();
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#scroll-totop').fadeIn();
				} else {
					$('#scroll-totop').fadeOut();
				}
			});
			// scroll body to 0px on click
			$('#scroll-totop').click(function () {
				$('body,html').animate({
					scrollTop: $(".usp").offset().top -50
				}, 800);
			});
		});

$(".scroll-todown").click(()=>{
    $('html, body').animate({
        scrollTop: $(".usp").offset().top -50
    }, 300);
})

$(".hero__banner").slick({
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed:500,
    infinite:true,
    autoplaySpeed: 4000,
})




// console.log($(".select-usp").attr('id'));

$(".usp .card").click(function(){
    var test =$(this).attr('id');
    // alert("show "+test+"")
    $('html,body').animate({
        scrollTop: $("#show-"+test+"").offset().top -50
    },300)
    // console.log(target);
})