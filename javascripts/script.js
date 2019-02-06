$(function() {
  $('.info-block-header').on('click', function () {
    if ($(this).find('.fa-angle-up').length) {
      $(this).find('.fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-up');
    }
    else {
      $(this).find('.fa-angle-down').addClass('fa-angle-up').removeClass('fa-angle-down');
    }
    $(this).next('.info-block-content').slideToggle(400);
  });
});
