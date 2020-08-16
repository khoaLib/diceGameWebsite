var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var changeImage = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").src = changeImage;

changeImage = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").src = changeImage;

if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Win 🍾";
}else if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent = "🍾 Player 1 Win";
}else{
  document.querySelector("h1").textContent = "🍾 Draw match!! 🍾";
}
