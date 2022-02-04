let fontSize = 1.4;

const makeBigger = () => {
   fontSize += 0.1;
   //document.querySelector("").style.fontSize = fontSize + "em";
   setFontSize();

   // print statement
   console.log(document.querySelector(".content").style.fontSize)
};

//function makeBigger() {
//   fontSize += 0.1;
//   document.querySelector(".content").style.fontSize = `${fontSize}em`;
//};

const makeSmaller = () => {
   fontSize -= 0.1;
   setFontSize();
};

function setFontSize() {
   document.querySelector(".content").style.fontSize = `${fontSize}em`;
   document.querySelector("h1").style.fontSize = `${fontSize + 0.5}em`;
}

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

// var, let, const