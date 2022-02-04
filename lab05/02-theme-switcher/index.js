/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

document.querySelector("#ocean").addEventListener('click', changeTheme);
document.querySelector("#desert").addEventListener('click', changeTheme);
document.querySelector("#high-contrast").addEventListener('click', changeTheme);
document.querySelector("#default").addEventListener('click', changeTheme);

/*
function changeOcean(event) {
   document.querySelector("body").className = "ocean";
}

function changeDesert(event) {
   document.querySelector("body").className = "desert";
}

function changeHigh(event) {
   document.querySelector("body").className = "high-contrast";
}

function changeDefault(event) {
   document.querySelector("body").className = "";
}
*/

function changeTheme(event) {
   var theme = event.target.id; // id of the target
   if (theme=="default") {
      document.querySelector("body").className = "";
   }
   else {
      document.querySelector("body").className = theme;
   }
}