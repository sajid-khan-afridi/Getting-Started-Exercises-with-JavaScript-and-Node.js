var favorite_fruits = ["mango", "banana", "apple"];
var search_fruits = ["mango", "orange", "banana"];
var result = [];
for (var a = 0; a < 3; a++) {
  result[a] = favorite_fruits.includes(search_fruits[a]);
}
for (a = 0; a < 3; a++) {
  if (result[a]) {
    console.log("You really like " + search_fruits[a]);
  }
}
