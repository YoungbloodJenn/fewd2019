//User hovers over item for description/detail & affiliate link

//User clicks to add item to bag
$('ul').on('click', 'li', function () {
    $(this).css('text-decoration', 'line-through')
})

//Indicator increments to show % of completion of bag
$('ul').on('click', 'li', function () {
    $(this).addId('progress');
})

// function update() { 
//     var element = document.getElementById("myprogressBar");    
//     var width = 1; 
//     var identity = setInterval(scene, 10); 
//     function scene() { 
//       if (width >= 100) { 
//         clearInterval(identity); 
//       } else { 
//         width++;  
//         element.style.width = width + '%';  
//       } 
//     } 
//   }

//Once bag is 100% complete user gets message

    //"Congratulations, you have built your Go Bag! 
    //What's next? How about a CPR/First Aid class? Why not take the 
    //Community Emergency Response Team (CERT) course? Talk with family, neighbors, 
    //and friends to make sure they are ready. American meteorologist Max Mayfield 
    //, "Preparation through education is less costly than learning through
    // tragedy."