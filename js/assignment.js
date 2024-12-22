"use strict";

// Create your references to the HTML elements here
const ageInputEl = document.getElementById("age-input");
const submissionBtn = document.getElementById("submission-btn");
const responseParagraph = document.getElementById('response'); // Reference to the paragraph with id 'response'

// Create a mutable variable called age and do not assign it a value
let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value); // Convert the input value to a number

    // Check age and update the response paragraph
    if (age >= 18) {
        responseParagraph.textContent = "You are an adult.";
    } else if (age >= 13) {
        responseParagraph.textContent = "You are a teenager.";
    } else {
        responseParagraph.textContent = "You are a child.";
    }
}

submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond(); // Call the function when the button is clicked
});

function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "0", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault(); // Prevent invalid characters from being entered
    }
}

ageInputEl.addEventListener("keydown", validateInput); // Prevent invalid input
