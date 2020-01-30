//drop down nav menu

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

//User hovers over item for description/detail & affiliate link

//User clicks to add item to bag
$('ul').on('click', 'li', function () {
    $(this).css('text-decoration', 'line-through')
})

//Indicator increments to show % of completion of bag
    

//Once bag is 100% complete user gets message
// .on('click') show modal popup; "#showModal' is the button name
// and '.modal-background' is the css styling block
$('#showModal').on('click', function(){
    $('.modal-background').css('display', 'flex');
  });
 
 // .on('click') close modal window; button id = 'close'
 $('#close').on('click', function(){
     $('.modal-background').hide();
 });

 //image carousel

 var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("resourceImg");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

    