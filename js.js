// Print the first p tag to the console using the ID, class, and tag selectors.


var ptag1 = document.getElementById("first");
console.log(ptag1.textContent);

var ptag1 = document.getElementsByClassName("special");
console.log(ptag1[0].textContent);

var ptag1 = document.getElementsByTagName("p");
console.log(ptag1[0].textContent);


// Print the special class using both the query selector and query all selector.


var specialClass = document.querySelectorAll('.special');
for (var i=0;i<specialClass.length;i++){
    console.log(specialClass[i].textContent);
}

var specialClass = document.querySelector('.special');
console.log(specialClass.textContent);

//Change the color of the h1 statement to blue.

var h1Color = document.querySelector("h1");
h1Color.style.color = "blue";



// Change the color of the last p tag to yellow.

var lastPtag = document.getElementById("last");
lastPtag.style.background = "yellow";