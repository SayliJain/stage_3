// Typewriter effect JavaScript
const text = "Eb ukq seod pk iwga wj wllha lea bnki oynwpyd, ukq iqop benop ejrajp pda qjeranoa.";
const typewriterText = document.getElementById("typewriterText");
let index = 0;

function type() {
    if (index < text.length) {
        typewriterText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust the typing speed (milliseconds) here
    }
}

type(); // Start the typewriter effect