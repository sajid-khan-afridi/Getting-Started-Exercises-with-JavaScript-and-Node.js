function car(manufacturer, model, color = "red", disc = "") {
  const obj = {
    manufacturer: manufacturer,
    model: model,
    color: color,
    disc: disc,
  };
  return obj;
}
var objreturn1 = car("Honda", "2022", "Yellow", "luxury");
var objreturn2 = car("Toyota", "2022");
console.log(objreturn1);
console.log(objreturn2);
