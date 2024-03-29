$(document).ready(function () {
    "use strict"
  
    // $(".body").ripples({ //function to get the  ripple water effect 
    //   dropRadius: 12,
    //   perturbance: 0.01,
    // });

    $('#no').on('mouseover touchstart', function() {
        var x = Math.floor(Math.random() * ($(window).width() - 150));
        var y = Math.floor(Math.random() * ($(window).height() - 150));
        $('#no').css({ 'left': x + 'px', 'top': y + 'px' });
        $('#yes button').animate({ width: '+=20px' }, 'fast');
        $('#yes button').animate({ height: '+=20px' }, 'fast');
        $('#yes button').css('font-size', 'larger');
      });

});

  