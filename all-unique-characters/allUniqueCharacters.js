testUniqueChars('Coode');

function testUniqueChars(text) {
  const uniqueText = new Set(text);
  return text.length == uniqueText.size;
}