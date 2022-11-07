//** Random Number 1-6 For Player 1 */

var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDicImage = ("dice" + randomNumber + ".png");

var folderConcat = ("images/" + randomDicImage);

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", folderConcat);

//** Random Number 1-6 For Player 2  */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDicImage2 = ("dice" + randomNumber2 + ".png");

var folderConcat2 = ("images/" + randomDicImage2);

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", folderConcat2);


if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win's 🚩";
} else if (randomNumber == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw 📍";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Win's 🚩";
}



