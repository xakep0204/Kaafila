
$(document).ready(() => {

  $('.ui.embed').embed();
  
  $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "download",
      "close"
    ]
  });
  
  $('.menu .item').tab();
  $('.ui.modal').modal('show')

})