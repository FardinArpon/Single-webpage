$('#toggle_button').click(function(){
    $('#menu').toggle();
});



$(document).ready(function() {
    // grab the initial top offset of the navigation 
       var stickyNavTop = $('#navbar_part').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('#navbar_part').addClass('sticky');
        } else {
            $('#navbar_part').removeClass('sticky'); 
        }
    };
  
    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
      stickyNav();
    });
  });



//   slide.html er js script

$('.services').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  });