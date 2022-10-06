// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var list = [];
var bool = true;
console.log(typeof bool);
// for (; bool; ) {
//   console.log("d");
// }
for (; bool; ) {
  list.push(
    prompt(
      "Enter anything you want like mountains, rivers, countries, cities, languages"
    )
  );

  var a = prompt("do you want to continue, enter yes or no");
  if (a == "no") {
    bool = false;
    // break;
  }
}
console.log("----------Your list contains------------ ");
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
