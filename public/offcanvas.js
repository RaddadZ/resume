$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
  $(document).on('click','.feather-plus', function(event){
    $(this).removeClass('feather-plus');
    $(this).addClass('feather-minus');
    $(this).attr('data-feather','minus');
    feather.replace()
  });
  $(document).on('click','.feather-minus', function(event){
    $(this).removeClass('feather-minus');
    $(this).addClass('feather-plus');
    $(this).attr('data-feather','plus');
    feather.replace()
  });
})
