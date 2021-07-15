var dice = Math.floor(Math.random()*6)+1;
var randomimage = "images/dice" + dice + ".png";

var dice2 = Math.ceil(Math.random()*6);   //Math.ceil --> 0.2 - 1
var randomimage2 = "images/dice" + dice2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage);
// document.querySelector(".img1").setAttribute("src",randomimage);
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(dice>dice2){
      document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(dice<dice2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else {
    document.querySelector("h1").innerHTML ="Draw!";
}
