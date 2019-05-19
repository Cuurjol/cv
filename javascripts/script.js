$(function() {
  $('.info-block-header').on('click', function () {
    if ($(this).find('.fa-minus').length) {
      $(this).find('.fa-minus').addClass('fa-plus').removeClass('fa-minus');
    }
    else {
      $(this).find('.fa-plus').addClass('fa-minus').removeClass('fa-plus');
    }
    $(this).next('.info-block-content-active').slideToggle(400);
  });
});
