document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const submitBtn = document.getElementById('submitBtn');
  
    submitBtn.addEventListener('click', function () {
      submitForm();
    });
  
    inputText.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        submitForm();
      }
    });
  
    function submitForm() {
      const inputValue = inputText.value;
      const asciiArray = inputValue.split('').map(char => char.charCodeAt(0));
      const asciiString = asciiArray.join(', ');
      document.getElementById('asciiResult').textContent = 'ASCII Characters: ' + asciiString;
    }
  });
  