// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is 
// printed for the appropriate color alien.

var alien_color=prompt("Enter the color i.e green or yellow or red");
var toLC=alien_color.toLowerCase();
if(toLC==="green"){
    console.log("You just earn 5 point for shooting the alien");
    console.log("alien is green");
} else if(toLC==="yellow"){
    console.log("You just earn 10 point for shooting the alien");
    console.log("alien is yellow");
} else if(toLC==="red"){
    console.log("You just earn 15 point for shooting the alien");
    console.log("alien is red");
}else {
    console.log("you entered the invalid color");

}