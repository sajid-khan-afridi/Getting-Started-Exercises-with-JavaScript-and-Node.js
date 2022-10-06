var users = ["ali", "ahmad", "admin", "zeeshan", "syed"];
if (users.length > 1 || users == undefined) {
  console.log("User array is not empty");
}
var arrSize = users.length;
for (var a = 0; a < arrSize; a++) {
  users.pop();
}
if (users.length > 1 || users == undefined) {
  console.log("User array is not empty");
} else {
  console.log("User array is empty now");
}
