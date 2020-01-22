// .on('click') show modal popup; "#showModal' is the button name
// and '.modal-background' is the css styling block
$('#showModal').on('click', function(){
   $('.modal-background').css('display', 'flex');
 });

// .on('click') close modal window; button id = 'close'
$('#close').on('click', function(){
    $('.modal-background').hide();
});