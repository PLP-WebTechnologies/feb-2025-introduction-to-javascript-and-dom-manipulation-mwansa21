// Change text content and style
const changeTextButton = document.getElementById('change-text-btn');
const description = document.getElementById('description');

changeTextButton.addEventListener('click', function() {
    description.textContent = "You've changed the text and style!";
    description.classList.toggle('changed'); // Toggle CSS class
});

// Add/Remove an element
const addRemoveButton = document.getElementById('add-remove-btn');
const paragraphContainer = document.getElementById('paragraph-container');

addRemoveButton.addEventListener('click', function() {
    const existingParagraph = document.getElementById('new-paragraph');

    if (existingParagraph) {
        // If paragraph exists, remove it
        paragraphContainer.removeChild(existingParagraph);
    } else {
        // If no paragraph, create and add it
        const newParagraph = document.createElement('p');
        newParagraph.id = 'new-paragraph';
        newParagraph.textContent = "I'm a new paragraph added to the page!";
        paragraphContainer.appendChild(newParagraph);
    }
});
