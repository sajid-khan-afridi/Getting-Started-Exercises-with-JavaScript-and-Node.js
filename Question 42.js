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
function make_great(params) {
  for (i = 0; i < params.length; i++) {
    x[i] = "Great " + x[i];
  }
}

console.log("Names of the Magicians");
make_great(x);
show_magicians(x);
