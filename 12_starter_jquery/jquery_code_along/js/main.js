// 1. Write a function and name it addMagic
  // Inside the function, log "Abracadabra!" to the console using console.log()
  // Also inside the function, log "Magic!" to the console using console.log()
function addMagic(){
  console.log("abracadabra");
  console.log("magic");

}

function changeContent(){
  $('h1').text('out to sea!');
}

// 2. Call the addMagic function.

// addMagic();

$('button').on('click', addMagic);
$('button').on('click', changeContent);
