// 1. Last code block - Hero's health points
let healthPoints = 5; // Change this value to 15, 7, or 3 to test different logic

if (healthPoints >= 10) {
    console.log("Hero is healthy.");
} else if (healthPoints < 10 && healthPoints >= 5) {
    console.log("Hero is slightly damaged.");
} else {
    console.log("Hero is close to death.");
}

// 2. Meaningful `if` statements
// Example 1: Check if a person is an adult
let age = 20; // Change to test different ages

if (age > 18) {
    console.log("You are an adult.");
}

// Example 2: Check if it's too hot outside
let temperature = 95; // Change this to test different temperatures

if (temperature > 90) {
    console.log("It’s too hot!");
}

// 3. Meaningful `if/else` statements
// Example 1: Check if a number is positive or negative
let number = -5; // Change this to test different numbers

if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}

// Example 2: Check if someone has enough money to buy an item
let money = 50; // Change this to test different amounts of money

if (money >= 100) {
    console.log("You can buy the item.");
} else {
    console.log("You do not have enough money.");
}

// 4. Meaningful `if/else if/else` statements
// Example 1: Check a person's age and categorize them
let ageCategory = 25; // Change this to test different ages

if (ageCategory < 13) {
    console.log("You are a child.");
} else if (ageCategory >= 13 && ageCategory < 20) {
    console.log("You are a teen.");
} else {
    console.log("You are an adult.");
}

// Example 2: Check satisfaction level
let satisfaction = 3; // Change this to test different satisfaction levels

if (satisfaction >= 8) {
    console.log("You are very satisfied.");
} else if (satisfaction >= 5) {
    console.log("You are somewhat satisfied.");
} else {
    console.log("You are not satisfied.");
}
