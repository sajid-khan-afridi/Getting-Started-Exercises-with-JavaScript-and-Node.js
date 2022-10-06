//prediction game, i will ask a question and you will predict about me

var item=["cricket","toyota","playing game"];
alert("PREDICTION GAME,PLZ PREDICT ABOUT ME");
var game=prompt("MY FAVORIT SPORT");
var car=prompt("company toyota or honda");
var hobby=prompt("what is my hobby?");
if(item[0]==game){
    console.log("Your prediction about SPORT is true")
}else{
    console.log("Your prediction about SPORT is false")
}
if(item[1]==car){
    console.log("Your prediction about COMPANY is true")
}else{
    console.log("Your prediction about COMPANY is false")
}
if(item[2]==game){
    console.log("Your prediction about HOBBY is true")
}else{
    console.log("Your prediction about HOBBY is false")
}