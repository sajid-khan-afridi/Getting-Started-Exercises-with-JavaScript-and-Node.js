let yName = prompt("Enter Your full name");
console.log(yName.toLowerCase());
console.log(yName.toUpperCase());
console.log(toTitleCase(yName));
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
