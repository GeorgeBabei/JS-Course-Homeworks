const myArr = ["Rock", "Paper", "Scissors"];
function play(player1, player2) {
  var player1 = Math.floor(Math.random() * 3);
  var player2 = Math.floor(Math.random() * 3);
  var opt1 = "It's a draw!";
  var opt2 = "Player wins!";
  var opt3 = "Computer wins!";
  if (player1 === 0 && player2 === 0) {
    console.log("Computer choice: " + '"' + myArr[0] + '"');
    console.log("Player choice: " + '"' + myArr[0] + '"');
    console.log(opt1);
  } else if (player1 === 0 && player2 === 1) {
    console.log("Computer choice: " + '"' + myArr[0] + '"');
    console.log("Player choice: " + '"' + myArr[1] + '"');
    console.log(opt2);
  } else if (player1 === 0 && player2 === 2) {
    console.log("Computer choice: " + '"' + myArr[0] + '"');
    console.log("Player choice: " + '"' + myArr[2] + '"');
    console.log(opt3);
  } else if (player1 === 1 && player2 === 0) {
    console.log("Computer choice: " + '"' + myArr[1] + '"');
    console.log("Player choice: " + '"' + myArr[0] + '"');
    console.log(opt3);
  } else if (player1 === 1 && player2 === 1) {
    console.log("Computer choice: " + '"' + myArr[1] + '"');
    console.log("Player choice: " + '"' + myArr[1] + '"');
    console.log(opt1);
  } else if (player1 === 1 && player2 === 2) {
    console.log("Computer choice: " + '"' + myArr[1] + '"');
    console.log("Player choice: " + '"' + myArr[2] + '"');
    console.log(opt2);
  } else if (player1 === 2 && player2 === 0) {
    console.log("Computer choice: " + '"' + myArr[2] + '"');
    console.log("Player choice: " + '"' + myArr[0] + '"');
    console.log(opt2);
  } else if (player1 === 2 && player2 === 1) {
    console.log("Computer choice: " + '"' + myArr[2] + '"');
    console.log("Player choice: " + '"' + myArr[1] + '"');
    console.log(opt3);
  } else if (player1 === 2 && player2 === 2) {
    console.log("Computer choice: " + '"' + myArr[2] + '"');
    console.log("Player choice: " + '"' + myArr[2] + '"');
    console.log(opt1);
  }
}
play();
