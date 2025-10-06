//Elements html in javascript
const exampleButtonsEl = document.getElementById("example-buttons");
const nextEl = document.getElementById("next");


//Function message about error define
function ButtonClick() {

  //Print message
  alert("Information about button click with error");

}

//Event about button click
ButtonClick.addEventListener("click", ButtonClick);
