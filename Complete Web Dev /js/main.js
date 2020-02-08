document.getElementById("firstButton").onclick = function(){

    document.getElementById("block").innerHTML="HOWDY";
}

document.getElementById("newButton").onclick = function() {
    document.getElementById("paragraph").innerHTML = 123;
    alert("Changed Inner HTML");
}
//innerHTML is not a function, it's a value
document.getElementById("appendButton").onclick = function (){
    document.getElementById("secondParagraph").innerHTML = "I think " +
    document.getElementById("secondParagraph").innerHTML + "awesome";
}
//innerHTML can be any html tags (lists, forms, headings, etc.)
document.getElementById("hiddenParagraph").onclick = function (){
    document.getElementById("hidden").innerHTML = "This is the hidden paragraph";
}