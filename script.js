// Get references to the HTML elements
const header = document.getElementById('greeting-header');
const nameInput = document.getElementById('name-input');
const greetButton = document.getElementById('greet-button');
const colorBoxes = document.querySelectorAll('.box');

// --- 1. GREETING FUNCTIONALITY (Remains the same) ---
greetButton.addEventListener('click', function() {
    const userName = nameInput.value.trim();
    if (userName) {
        header.textContent = `Hello, ${userName}`;
    } else {
        header.textContent = 'Hello';
        alert('Please enter your name!');
    }
});

// ----------------------------------------------------------------
// --- 2. UPDATED BOX COLOR CHANGE FUNCTIONALITY ---
// ----------------------------------------------------------------

colorBoxes.forEach(box => {
    // Determine the target color from the box's ID (e.g., 'box-red' -> 'red')
    // We use a simple way to extract the color name from the ID:
    const targetColor = box.id.split('-')[1]; // This gets 'red', 'blue', 'green', or 'yellow'

    // Add a click event listener to each box
    box.addEventListener('click', function() {
        // **DOM Manipulation:** Change the background color to the respective color.
        box.style.backgroundColor = targetColor;
        
        // **Optional:** Change the text color to white for better contrast 
        // once the background color is applied.
        box.style.color = 'white'; 
    });
});