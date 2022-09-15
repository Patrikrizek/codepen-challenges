document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});


function displayResult() {
    const originalText = document.getElementById('original-text').value;
    const vowelNumber = document.getElementById('vowel-number').value;

    const charactersOnly = /^[A-Za-z\s]+$/;
    const numbersOnly = /\b([1-9]|10)\b/;

    if (!charactersOnly.test(originalText)) {
        document.getElementById('original-text').select();
        alert("Only letters are allowed. No spacing on beginning and the end.")
    } else if (!numbersOnly.test(vowelNumber)) {
        document.getElementById('vowel-number').select();
        alert("Only digits from 2 -10 are allowed.")        
    } else {
        document.getElementById('text').innerHTML = longText(originalText, vowelNumber);
    }          
}

function longText(text, n) {
    return text.replace(/[aeiou]/g, (vowel) => vowel.repeat(n));
}