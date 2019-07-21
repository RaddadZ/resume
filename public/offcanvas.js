$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
  
  $(document).on('click','.feather-plus, .feather-minus', function(event){
    $(this).toggleClass('feather-minus');
    $(this).toggleClass('feather-plus');
    var plusorminus = $(this).attr('class').split('feather-').pop().split(' ')[0];
    $(this).attr('data-feather',plusorminus);
    feather.replace()
  });

  $(document).on('click', '#bookmark', function() {
      var svg = $(this).find(".feather-chevrons-down, .feather-chevrons-up");
      svg.toggleClass("feather-chevrons-down");
      svg.toggleClass("feather-chevrons-up");
      var upordown = svg.attr('class').split('chevrons-').pop().split(' ')[0];
      svg.attr('data-feather','chevrons-'+upordown);
      if(upordown=='up'){
        $(this).find('span').text('less');
        $("svg[data-toggle='collapse']").filter('.feather-plus').trigger('click');
      }
      else {
        $(this).find('span').text('more');
        $("svg[data-toggle='collapse']").filter('.feather-minus').trigger('click');
      }

      feather.replace()
  });
})
