let pi = 3.1419;
let radius;
let circumference ;
// radius = window.prompt("Enter the radius of a circle: ");


// radius= Number(radius);

// circumference= 2 * pi* radius;

document.getElementById("mySubmit").onclick = function () {
   radius = document.getElementById("myText").value;
   radius = Number(radius);

   circumference = 2 * pi * radius;
   document.getElementById("myH3").textContent = circumference + "cm";

}