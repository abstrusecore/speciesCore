
$(document).ready(() =>{
  var number = Math.round(Math.random() * $('#A').children().length);
  console.log(number);
  
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

