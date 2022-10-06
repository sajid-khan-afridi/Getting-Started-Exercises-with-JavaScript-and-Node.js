var current_users = ["ali", "ahmad", "admin", "zeeshan", "syed"];
var new_users = ["Ali", "ahmad", "asif", "kashif", "zahid"];
var arr = [];
//current_users array need to convert to lower case
// for the above we use map function
var lower_cu = current_users.map((element) => element.toLowerCase());

for (var a = 0; a < new_users.length; a++) {
  arr[a] = Number(current_users.includes(new_users[a].toLowerCase()));
}
for (a = 0; a < new_users.length; a++) {
  if (arr[a] == 1) {
    console.log("--------------------------------------------------------");
    console.log("You will need to enter a new username");
    console.log(new_users[a] + " already exist in current users list");
    console.log("--------------------------------------------------------");
  } else {
    console.log(new_users[a] + " is available");
  }
}
