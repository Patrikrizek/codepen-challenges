document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});

generateText();
function generateText() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const delChars = '#%';
    let text = '';

    for (let i = 0; i < 10; i++) {
        let truthy = (Math.random() >= 0.83) ? 1 : 0;

        if (truthy) {
            text += delChars.charAt(Math.floor(Math.random() * delChars.length));
        } else {
            text += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    }

    document.getElementById('textOne').innerHTML = text;
}

function checkResult() {
    var textOne = document.getElementById('textOne').innerText;
    var textTwo = document.getElementById('textTwo').value;

    const sanitize = /^[A-Za-z]+$/;

    if (!sanitize.test(textTwo) || textOne == textTwo) {
        document.getElementById('textTwo').select();
        alert("Only letters are allowed.")
    } else {
        if (!equalWithDeletions(textOne, textTwo)) {
            for (let char of textOne) textOne = textOne.replace(/%[^%]|[^#]#/, '');
            document.getElementById('correctAnswer').innerHTML = `Incorrect, the answer is: ${textOne}, please try again. `;
        } else {
            document.getElementById('correctAnswer').innerHTML = 'Well done, you are right!';
        }
    }
}

function equalWithDeletions(n, m) {
    const regex = /%[^%]|[^#]#/;

    for (let char of n) n = n.replace(regex, '');
    for (let char of m) m = m.replace(regex, '');

    return n === m;
}