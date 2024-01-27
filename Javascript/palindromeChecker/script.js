function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

function checkPalindrome() {
  const inputElement = document.getElementById('text-input');
  const resultElement = document.getElementById('result');

  const inputValue = inputElement.value.trim();

  if (inputValue === '') {
    alert('Please input a value.');
    return;
  }

  const isPalindromic = isPalindrome(inputValue);
}
