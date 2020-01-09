$(document).ready(function () {

//form creation

//this line creates the form
$("<form>").appendTo('body')
//this line creates input box with text string
var toDo = $("<input type = text>").appendTo('form')
//this line creates a submit button
$("<input type = submit>").appendTo('form')
//this line creates space in the body of the html for the list to live
var listSpace = $("<ol></ol>").appendTo('body')

// when click sumbit value appends to list

$('form').submit(function () {
    event.preventDefault()
//Below resets submit box to empty
    var addItem = toDo.val();
    $("<li>" + addItem + "</li>").appendTo(listSpace)
    toDo.val(" ");

})

//when click on list strikethru
$('ol').on('click', 'li', function () {
    $(this).css('text-decoration', 'line-through')
})

//add item prompt
function addItem(){
    var response = prompt("What do you want to add to your to do list?");
         alert("OK! Let's add " + response + " to your list! Type it into the box below and click submit to add.");
 }
 addItem();

})