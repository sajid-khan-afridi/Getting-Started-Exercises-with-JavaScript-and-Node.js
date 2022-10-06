function make_shirt(size = "large", msg = "I love JavaScript") {
  console.log("The size of the T-Shirt is " + size);
  console.log("The message of the T-Shirt " + msg);
  console.log("-------------------------------------");
}
console.log("default message");
make_shirt();
make_shirt("large", "Hello");
make_shirt("Medium", "HOPE");
