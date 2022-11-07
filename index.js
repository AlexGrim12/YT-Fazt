let username = "AlexGrim";
let age = 18;
let hasHobbies = true;
let points = [10, 20, 30];
let user = {
  username: "Alex",
  age: 18,
};
const PI = 3.1415;

console.log(username);
console.log(age);
console.log(hasHobbies);
console.log(points);
console.log(user);
console.log(PI);

console.log("---------------------------------------------------------");

const Uage = 10;

if (Uage >= 18) {
  console.log("You are an adult");
} else if (Uage >= 13) {
  console.log("You are a teenager");
} else {
  console.log("You are a child");
}

console.log("---------------------------------------------------------");

const names = ["Joe", "Alex", "Max"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("---------------------------------------------------------");

const showUserInfo = (userName, userAge) =>
  `The user name is ${userName} and his age is ${userAge}`;

console.log(showUserInfo("Alex", 18));
console.log(showUserInfo("Joe", 20));
