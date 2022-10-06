// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var guestList = ["Ahmad", "Ali", "Basit", "Asif"];
for (let a = 0; a < guestList.length; a++) {
  console.log(
    `Salam ${guestList[a]} I would like to invite you for dinner and I will be happy to come at 8 o'clock`
  );
}
console.log("------------Question 14 ends here------------");

//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(guestList[2] + " can't make to come");

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestList.splice(2, 1, "Saleem");

// • Print a second set of invitation messages, one for each person who is still in your list.
for (let a = 0; a < guestList.length; a++) {
  console.log(
    `Salam ${guestList[a]} I would like to invite you for dinner and I will be happy to come at 8 o'clock`
  );
}
console.log(
  "I found a bigger dinner table and I would like invite three more people to come "
);
console.log("------------Question 15 ends here------------");
//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.
guestList.unshift("Zohaib");

// • Add one new guest to the middle of your array.
guestList.splice(3, 0, "Zia");

// • Use append() to add one new guest to the end of your list.
guestList.push("Zabi");
// • Print a new set of invitation messages, one for each person in your list.
for (let a = 0; a < guestList.length; a++) {
  console.log(
    `Salam ${guestList[a]} I would like to invite you for dinner and I will be happy to come at 8 o'clock`
  );
}
console.log("------------Question 16 ends here------------");
//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Sorry Guys! I can invite only two people for dinner");

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
var guestNumber = guestList.length;
// console.log(guestNumber);
for (a = 0; a < guestNumber - 2; a++) {
  console.log(
    guestList[guestList.length - 1] + " I am sorry I can't invite you to dinner"
  );
  guestList.pop();
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(guestList);
for (a = 0; a < guestList.length; a++) {
  console.log(guestList[a] + " are still invited");
}
console.log(guestList);
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestNumber = guestList.length;
for (a = 0; a < guestNumber; a++) {
  guestList.pop();
}
console.log(guestList);
