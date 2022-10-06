var x = [
  "Jon Finch",
  "David Blaine",
  "Derren Brown",
  "David Copperfield",
  "Lance Burton",
];
function show_magicians(params) {
  for (i = 0; i < x.length; i++) console.log(params[i]);
}

console.log("Names of the Magicians");

show_magicians(x);
