// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var riddles;
riddles = [
    "I'm at the bend or a triangle end. What am I? (angle)" + " Answer: Angle!",
    "Of surfaces, I have six. Each is a perfect match not a mix. What am I?" + " Answer: Cube!",
    "Rather than the sides you see, the measure of the entire surface is where you'll find me. What am I?" + " Answer: Area!",
    "I'm the measure of all the sides not the length of ocean tides. What am I?" + " Answer: Perimeter!",
    "Sarah, Michael and Lean had 29, 18, and 15 beans, now they need to find the mean?" + " Answer: 20!",
    "Sixteen might seem mean but wait until you add a team of seventeen. How many now?" + " Answer: 33!",
    "You know four times four now add ten more. What am I?" + " Answer: 26!",
    "Two is cool but add eight more to rule. What am I?" + " Answer: 10!",
    "Not one, two, three but four. Now times that by eight more. What am I?" + " Answer: 32!"];

function randGen() {
    return Math.floor(Math.random() * 5);
}

function sentence() {
    var random1 = Math.floor(Math.random() * 9);
    var content = riddles[random1];

    document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};
sentence();