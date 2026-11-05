
// ==========================================
// LESSON 9: DOM MANIPULATION
// ==========================================

// Method 1: Select an element by ID
const header = document.getElementById("main-header");
console.log(header);

// Method 2: Select elements by class name
const paragraphs = document.getElementsByClassName("content");
console.log(paragraphs);

// Method 3: Select elements by tag name
const headings = document.getElementsByTagName("h2");
console.log(headings);

// Method 4: Select the first element using querySelector
const title = document.querySelector(".title");
console.log(title);

// Method 5: Select all elements using querySelectorAll
const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);

// Method 6: Select elements by name
const nameInput = document.getElementsByName("name");
console.log(nameInput);

// Method 7: Select an element using querySelector and ID
const contactForm = document.querySelector("#contact-form");
console.log(contactForm);

// Method 8: Select the first child element
const firstNavItem = document.querySelector(".nav-list").firstElementChild;
console.log(firstNavItem);

// Method 9: Select the parent element
const navParent = document.querySelector(".nav-link").parentElement;
console.log(navParent);

// Method 10: Select the closest matching ancestor
const article = document.querySelector(".content").closest("article");
console.log(article);


// ==========================================
// TASK 9.2: MODIFY EXISTING PAGE CONTENT
// ==========================================

// Change the main heading
const mainHeading = document.querySelector("#main-header h1");
mainHeading.textContent = "Learning DOM Manipulation with JavaScript";

// Change the first paragraph
const firstParagraph = document.querySelector(".content");
firstParagraph.textContent = "I am learning how to manipulate HTML elements using JavaScript.";

// Change the placeholder attribute
const emailInput = document.querySelector("#email");
emailInput.setAttribute("placeholder", "Enter your email address");

// Change all paragraphs with the content class
const allParagraphs = document.querySelectorAll(".content");

allParagraphs.forEach(function (paragraph, index) {
    paragraph.textContent = "This is paragraph number " + (index + 1) + " updated using JavaScript.";
});

// Change the ID of the article heading
const articleHeading = document.querySelector(".title");
articleHeading.id = "updated-title";

console.log(articleHeading);


// ==========================================
// TASK 9.3: CREATE AND REMOVE ELEMENTS
// ==========================================

// Create a new paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created using JavaScript.";

document.querySelector("article").appendChild(newParagraph);

// Create a new navigation item
const newListItem = document.createElement("li");
newListItem.textContent = "Services";

document.querySelector(".nav-list").appendChild(newListItem);

// Remove the footer from the page
const footer = document.querySelector("footer");
footer.remove();

// Remove a child element using removeChild()
const navList = document.querySelector(".nav-list");
const lastItem = navList.lastElementChild;

navList.removeChild(lastItem);


// ==========================================
// TASK 9.4: MODIFY CSS CLASSES
// ==========================================

// Add the highlight class
const mainContainer = document.querySelector(".container");
mainContainer.classList.add("highlight");

// Remove the highlight class
mainContainer.classList.remove("highlight");

// Toggle the highlight class
mainContainer.classList.toggle("highlight");

// Change the appearance of the article heading
const articleTitle = document.querySelector(".title");
articleTitle.classList.add("large-text");


// ==========================================
// LESSON 10: EVENTS AND USER INTERACTION
// ==========================================

// TASK 10.1: CLICK COUNTER

const countDisplay = document.querySelector("#count");
const countButton = document.querySelector("#count-button");

let clickCount = 0;

countButton.addEventListener("click", function () {
    clickCount++;
    countDisplay.textContent = clickCount;
});


// TASK 10.2: KEYBOARD EVENTS

const keyDisplay = document.querySelector("#key-display");

document.addEventListener("keydown", function (event) {
    keyDisplay.textContent = event.key;
});


// TASK 10.3: EVENT DELEGATION

const delegationList = document.querySelector("#delegation-list");
const selectedItem = document.querySelector("#selected-item");

delegationList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        selectedItem.textContent = "You selected: " + event.target.textContent;
    }
});


// TASK 10.4: FORM VALIDATION

const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = document.querySelector("#name").value.trim();
    const emailValue = document.querySelector("#email").value.trim();

    if (nameValue === "" || emailValue === "") {
        formMessage.textContent = "Please fill in all fields.";
    } else {
        formMessage.textContent = "Form submitted successfully!";
    }
});
