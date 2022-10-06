var users = ["ali", "ahmad", "admin", "zeeshan", "syed"];
var adminIndex = users.indexOf("admin");
console.log(
  "Hello " + users[adminIndex] + ", would you like to see a status report?"
);
for (var a = 0; a < 5; a++) {
  if (a == adminIndex) {
    continue;
  }
  console.log("Hello " + users[a] + ", thank you for logging in again");
}
