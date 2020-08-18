var number = Math.round(Math.random() * 3.49)

$(document).ready(() =>{
  
  $(`#${number - 1}`).fadeToggle(700);

  $('.links').slideToggle(700);
  $('.uno').toggle();
  $('.dos').toggle();

  $('.toggler').on('click', () => {
    $('.links').slideToggle(500);
    $('.uno').toggle();
    $('.dos').toggle();
  });

  $('#A').on('change', event => {
    $(event.target.value).slideToggle();
    console.log(event.target.value);
  });
  
  });

