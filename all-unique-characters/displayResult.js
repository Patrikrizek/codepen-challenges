document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submit").click();
    }
  });

  function displayResult() {
    const uniqueText = document.getElementById('unique-text').value;
    const agreeWrapper = document.querySelector('.wrapper')
    const agreeForm = document.querySelector('.form-start');

    const charactersOnly = /^[A-Za-z\s]+$/;

    if (!charactersOnly.test(uniqueText)) {
      document.getElementById('unique-text').select();
      alert("Only letters are allowed. No spacing on beginning and the end.")
    } else {
      agreeWrapper.classList.remove('confirmed', 'denied');
      agreeForm.classList.remove('confirmed', 'denied');

      if (testUniqueChars(uniqueText)) {
        agreeWrapper.classList.add('confirmed');
        agreeForm.classList.add('confirmed');
      } else {
        agreeWrapper.classList.add('denied');
        agreeForm.classList.add('denied');
      }
    }
  }

  function testUniqueChars(text) {
    const uniqueText = new Set(text);
    return text.length == uniqueText.size;
  }