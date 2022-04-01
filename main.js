//function for common procedures
//1 to 6 no generator
function rollDice(){
  return Math.floor((Math.random() * 6) + 1);
}

//function to select images
function selectImg(imgSelect,label){
  document.querySelector(imgSelect).setAttribute("src", "images/dice" + label + ".png")
}
//function to display results
function display(results){
  document.querySelector("h1").innerText = results;
}

// main program
// for player 1
const player1 = rollDice();
selectImg(".img1",player1);
//for player2
const player2 = rollDice();
selectImg(".img2",player2);
// display results
if(player1 > player2){
  display("🏆Player 1 Wins!") ;
}
else if(player1 < player2){
  display("Player 2 Wins!🏆") ;
}
else{
  display("Draw");
}
