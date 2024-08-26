// Get the elements
const lookingGlass = document.getElementById('looking-glass');
const content = document.getElementById('content');

// Function to update the position of the looking glass
function updatePosition(event) {
    lookingGlass.style.left = event.clientX - lookingGlass.offsetWidth / 2 + 'px';
    lookingGlass.style.top = event.clientY - lookingGlass.offsetHeight / 2 + 'px';
}

// Function to show the content and change the looking glass color
function revealContent() {
    lookingGlass.style.backgroundColor = 'rgba(255, 0, 0, 1)'; // Change to solid color
    content.style.display = 'block'; // Show the content
}

// Function to hide the content and reset the looking glass
function hideContent() {
    lookingGlass.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Reset to transparent color
    content.style.display = 'none'; // Hide the content
    document.addEventListener('mousemove', updatePosition); // Re-enable the position update
}

// Event listener for mousemove to update the position of the looking glass
document.addEventListener('mousemove', updatePosition);

// Event listener for mouseover to reveal content
lookingGlass.addEventListener('mouseover', () => {
    revealContent();
    document.removeEventListener('mousemove', updatePosition); // Stop updating the position
});

// Event listener for mouseleave to hide content
lookingGlass.addEventListener('mouseleave', hideContent);
