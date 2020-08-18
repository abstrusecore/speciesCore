var number = Math.round(Math.random() * 3.49)

$(document).ready(() =>{
  
  $(`#a${number - 1}`).fadeToggle(700);

  $('.links').slideToggle(700);
  $('.uno').toggle();
  $('.dos').toggle();

  $('.toggler').on('click', () => {
    $('.links').slideToggle(500);
    $('.uno').toggle();
    $('.dos').toggle();
  });

  $('.a0').on('click', () => {
    $('#a0').slideToggle();
    console.log("woah");
  });
  $('.a1').on('click', () => {
    $('#a1').slideToggle();
    console.log("woah2");
  });
  $('.a2').on('click', () => {
    $('#a2').slideToggle();
    console.log("woah3");
  });
  
  });

