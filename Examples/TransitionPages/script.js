// Function to handle scroll event
function handleScroll() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const offset = window.innerHeight - rect.top;

        if (offset >= 0 && offset <= window.innerHeight) {
            // Calculate the transform value to slide the section up
            const transformValue = `translateY(-${(index - 1) * 100}vh)`;
            section.style.transform = transformValue;
        }
    });
}

// Event listener for scroll event
let isScrolling = false;
window.addEventListener('scroll', function() {
    if (!isScrolling) {
        isScrolling = true;
        handleScroll();
        setTimeout(function() {
            isScrolling = false;
        }, 500); // Adjust the timeout to match the transition duration
    }
});

// Initial call to handleScroll to set initial background positions
window.onload = handleScroll; // Call handleScroll when the window loads to ensure correct initial positioning
