var Magicians = [
  "Jon Finch",
  "David Blaine",
  "Derren Brown",
  "David Copperfield",
  "Lance Burton",
];
var Great_Magicians = [];
function show_magicians(params) {
  for (i = 0; i < Magicians.length; i++) console.log(params[i]);
}
function make_great(params) {
  for (i = 0; i < params.length; i++) {
    Great_Magicians[i] = "Great " + Magicians[i];
  }
}

console.log("Names of the Magicians");
make_great(Magicians);
show_magicians(Magicians);
console.log("Names of the Great Magicians");
show_magicians(Great_Magicians);
