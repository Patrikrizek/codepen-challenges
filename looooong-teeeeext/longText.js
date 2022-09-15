longText('Patrik', 5);

function longText(text, n) {
    const arrayText = text.split('');
    const editedText = [];
    
    for (const element of arrayText) {
        
        if (isVowel(element)) {
            const vowel = element.repeat(n);
            editedText.push(vowel);
        } else {
            editedText.push(element);
        }
    }

    function isVowel(character) {
        return (/^[aeiou]$/i).test(character);
    }
    
    const longText = editedText.join('').toString();
    return longText;
}