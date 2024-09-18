// Get references to the menu button and action element
const menu = document.getElementById("menu");
const action = document.getElementById("actions");

// Add a click event listener to the menu button
menu.addEventListener("click", () => {
    hundelMenu(); // Call the function to handle menu toggle
});

// Function to handle the toggling of classes
function hundelMenu(){
    // Toggle the 'is-active' class on both the menu button and action element
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}