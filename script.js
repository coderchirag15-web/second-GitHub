// Video jaisa exact animation:
// Pehle "Chirag Devatwal" backspace hoke delete hoga, phir "Web Developer" type hoga.

const textElement = document.querySelector(".typing-text");

// Sequence of words
const words = ["Chirag Devatwal", "Web Developer", "Frontend Developer", "UI/UX Designer"];

let wordIndex = 0;
let charIndex = words[0].length; // Starts with full text "Chirag Devatwal"
let isDeleting = true; // Video starts by deleting "Chirag Devatwal"

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        // Backspace animation
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Typing animation
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Typing / Deleting speed matching video pace
    let speed = isDeleting ? 70 : 110;

    // When a word is fully typed
    if (!isDeleting && charIndex === currentWord.length) {
        speed = 2200; // Pause at full word
        isDeleting = true;
    } 
    // When a word is completely deleted
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to next word ("Web Developer", etc.)
        speed = 400; // Brief pause before typing next word
    }

    setTimeout(typeEffect, speed);
}

// Initial delay before backspacing starts (like in the video)
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1500);
});
















